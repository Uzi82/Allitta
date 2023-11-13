<?php

namespace App\Services\Products;

use App\Enums\ProductOrderStatusEnum;
use App\Models\Products\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class ProductRecommendationService
{
    public function getBestProducts(int $limit): Collection
    {
        return Product::select(
            'products.id',
            'products.name',
            'products.logotype_path',
            'products.cost',
            'products.description',
        )
            ->leftJoin('product_order_items', 'products.id', '=', 'product_order_items.product_id')
            ->leftJoin('product_orders', 'product_orders.id', '=', 'product_order_items.order_id')
            ->leftJoin('shops', 'shops.id', '=', 'products.shop_id')
            ->where('product_orders.status', ProductOrderStatusEnum::DONE)
            ->where('shops.active', true)
            ->groupBy('products.id', 'products.name', 'products.logotype_path', 'products.cost', 'products.description')
            ->orderByDesc(DB::raw('COUNT(*)'))
            ->limit($limit)
            ->get();
    }

    public function getPersonalBestProducts(int $limit): Collection
    {
        return Product::select('id', 'name', 'logotype_path', 'cost', 'description')->inRandomOrder()->limit($limit)->get();
    }
}
