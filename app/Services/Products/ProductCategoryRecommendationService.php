<?php

namespace App\Services\Products;

use App\Enums\OrderStatusEnum;
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
            ->rightJoin('order_items', 'products.id', '=', 'order_items.product_id')
            ->leftJoin('product_orders', 'product_orders.id', '=', 'order_items.order_id')
            ->where('product_orders.status', OrderStatusEnum::DONE)
            ->groupBy('product_categories.id')
            ->orderByDesc(DB::raw('COUNT(*)'))
            ->limit($limit)
            ->get();
    }
}
