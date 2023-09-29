<?php

namespace App\Services\Products;

use App\Enums\ProductOrderStatusEnum;
use App\Models\Products\ProductCategory;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class ProductCategoryRecommendationService
{
    public function getBestCategories(int $limit): Collection
    {
        return ProductCategory::select(
            'product_categories.id',
            'product_categories.logotype_path',
            'product_categories.banner_path'
        )
            ->rightJoin('products', 'product_categories.id', '=', 'products.category_id')
            ->rightJoin('product_order_items', 'products.id', '=', 'product_order_items.product_id')
            ->leftJoin('product_orders', 'product_orders.id', '=', 'product_order_items.order_id')
            ->leftJoin('shops', 'shops.id', '=', 'products.shop_id')
            ->where('product_orders.status', ProductOrderStatusEnum::DONE)
            ->where('shops.active', true)
            ->groupBy('product_categories.id')
            ->orderByDesc(DB::raw('COUNT(*)'))
            ->limit($limit)
            ->get();
    }
}
