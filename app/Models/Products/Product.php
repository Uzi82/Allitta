<?php

namespace App\Models\Products;

use App\Enums\ProductOrderStatusEnum;
use App\Models\Shops\Shop;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\DB;

class Product extends Model
{
    use HasFactory;

    public function shop(): BelongsTo
    {
        return $this->belongsTo(Shop::class);
    }

    public function searchByName(Builder $query, string $name): Builder
    {
        $tsQuery = implode(':* & ', explode(' ', trim($name))) . ':*';
        return $query->whereRaw('name_tsvector @@ to_tsquery(?)', $tsQuery);
    }

    public function getProductCategoriesByShopId(int $shopId, int $limit)
    {
        return Product::distinct()
            ->select('category_id')
            ->where('shop_id', $shopId)
            ->where('active', true)
            ->limit($limit)
            ->pluck('category_id');
    }

    public function getBestProductsByShopIdAndCategoryId(int $shopId, int $categoryId, int $limit)
    {
        $query = Product::select('products.id', 'products.name', 'products.logotype_path', 'products.currency', 'products.cost', 'products.description')
            ->leftJoin('shops', 'products.shop_id', '=', 'shops.id')
            ->where('shops.id', $shopId)
            ->where('shops.active', true)
            ->where('products.active', true)
            ->where('products.category_id', $categoryId)
            ->groupBy('products.id', 'product_sales')
            ->orderByRaw('subquery_alias.product_sales IS NULL, subquery_alias.product_sales DESC')
            ->limit($limit);

        $subquery = Product::select('products.id as product_id', DB::raw('COUNT(*) as product_sales'))
            ->rightJoin('product_order_items', 'products.id', '=', 'product_order_items.product_id')
            ->leftJoin('product_orders', 'product_orders.id', '=', 'product_order_items.order_id')
            ->where('product_orders.status', ProductOrderStatusEnum::DONE)
            ->where('products.shop_id', $shopId)
            ->groupBy('products.id');

        $query->leftJoinSub($subquery, 'subquery_alias', function ($join) {
            $join->on('products.id', '=', 'subquery_alias.product_id');
        });

        return $query->get();
    }
}
