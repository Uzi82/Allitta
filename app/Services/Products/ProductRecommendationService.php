<?php

namespace App\Services\Products;

use App\Enums\OrderStatusEnum;
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
            'products.currency',
            'products.cost',
            'products.description',
        )
            ->leftJoin('order_items', 'products.id', '=', 'order_items.product_id')
            ->leftJoin('product_orders', 'product_orders.id', '=', 'order_items.order_id')
            ->where('product_orders.status', OrderStatusEnum::DONE)
            ->groupBy('products.id', 'products.name', 'products.logotype_path', 'products.currency', 'products.cost', 'products.description')
            ->orderByDesc(DB::raw('COUNT(*)'))
            ->limit($limit)
            ->get();
    }

    public function getPersonalBestProducts(int $limit): Collection
    {
        return Product::select('id', 'name', 'logotype_path', 'currency', 'cost', 'description')->inRandomOrder()->limit($limit)->get();
    }
}
