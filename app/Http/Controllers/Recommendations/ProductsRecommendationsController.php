<?php

namespace App\Http\Controllers\Recommendations;

use App\Enums\OrderStatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\LimitRequest;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductsRecommendationsController extends Controller
{
    public function bestProducts(LimitRequest $request)
    {
        $limit = $request->input('limit', 10);

        $products = Product::select(
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

        foreach ($products as $product) {
            $product->logotype_path = asset($product->logotype_path);
            $product->currency = config('currencies')[$product->currency];
        }

        return $products;
    }

    public function personal(LimitRequest $request)
    {
        $limit = $request->input('limit', 10);

        $products = Product::select('id', 'name', 'logotype_path', 'currency', 'cost', 'description')->inRandomOrder()->limit($limit)->get();

        foreach ($products as $product) {
            $product->logotype_path = asset($product->logotype_path);
            $product->currency = config('currencies')[$product->currency];
        }

        return $products;
    }
}
