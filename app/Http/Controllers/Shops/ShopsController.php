<?php

namespace App\Http\Controllers\Shops;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductCategoryLimitRequest;
use App\Http\Resources\Products\ProductRecommendationResource;
use App\Http\Resources\Shops\ShopResource;
use App\Models\Products\Product;
use App\Models\Shops\Shop;
use Illuminate\Http\JsonResponse;

class ShopsController extends Controller
{
    public function show(ProductCategoryLimitRequest $request): JsonResponse
    {
        $data = [];
        $shopId = $this->getId($request);

        $data['shop'] = ShopResource::collection([(new Shop())->getInfoByShopId($shopId)]);
        $categoryIds = (new Product())->getProductCategoriesByShopId($shopId, $request->input('category_limit', 10));

        foreach ($categoryIds as $categoryId) {
            $products = ProductRecommendationResource::collection(
                (new Product())->getBestProductsByShopIdAndCategoryId($shopId, $categoryId, $request->input('product_limit', 10))
            );

            if ($products->count() !== 0) {
                $data['data'][] = ['category_id' => $categoryId, 'category_name' => __('categories')[$categoryId], 'products' => $products];
            }
        }

        return response()->json($data);
    }
}
