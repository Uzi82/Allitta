<?php

namespace App\Http\Controllers\Products;

use App\Enums\CurrencyEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\LimitRequest;
use App\Http\Resources\Products\ProductRecommendationResource;
use App\Models\Products\Product;
use App\Models\Shops\Shop;
use Illuminate\Support\Facades\DB;

class ShopProductController extends Controller
{

    public function show(LimitRequest $request)
    {
        $shopId = $this->getId($request, 'shop_id');
        $productId = $this->getId($request, 'product_id');

        $shop = (new Shop())->getInfoByShopId($shopId);

        if (empty($shop)) {
            return response()->json(['error' => 'This store does not exist'], 422);
        }

        $product = Product::where('id', $productId)
            ->select(
                'id',
                'logotype_path',
                'name',
                'description',
                'images',
                'cost',
                'category_id',
                DB::raw("ROUND((SELECT AVG(rating) FROM product_order_items WHERE product_id = ?) * 2) / 2 as rating")
            )
            ->addBinding([$productId])
            ->where('shop_id', $shopId)
            ->where('active', true)
            ->first();

        if (empty($product)) {
            return response()->json(['error' => 'This product does not exist'], 422);
        }

        return [
            'product' => [
                'id' => $product->id,
                'name' => $product->name,
                'description' => $product->description,
                'logotype_path' => asset($product->logotype_path),
                'images' => array_map('asset', json_decode($product->images)),
                'cost' => (float)$product->cost,
                'currency' => config('currencies')[CurrencyEnum::USD->value],
                'rating' => (float)$product->rating ?? 0,
            ],
            'shop' => [
                'id' => $shop->id,
                'name' => $shop->name,
                'rating' => round(($shop->rating ?? 0) * 2) / 2,
            ],
            'products_in_category' => ProductRecommendationResource::collection((new Product())->getBestProductsByShopIdAndCategoryId($shopId, $product->category_id, $request->input('limit', 4)))
        ];
    }
}
