<?php

namespace App\Http\Controllers\Shops;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductCategoryLimitRequest;
use App\Http\Resources\Products\ProductRecommendationResource;
use App\Http\Resources\Shops\ShopResource;
use App\Models\Products\Product;
use App\Models\Shops\Shop;
use Illuminate\Http\JsonResponse;

class ShopController extends Controller
{
    public function show(ProductCategoryLimitRequest $request): JsonResponse
    {
        $data = [];
        $shopId = $this->getId($request, 'shop_id');

        $data['shop'] = ShopResource::collection([(new Shop())->getInfoByShopId($shopId)]);
        $categoryIds = (new Product())->getProductCategoriesByShopId($shopId, $request->input('category_limit', 10));

        foreach ($categoryIds as $categoryId) {
            $products = ProductRecommendationResource::collection(
                (new Product())->getBestProductsByShopIdAndCategoryId($shopId, $categoryId, $request->input('product_limit', 10))
            );

            if ($products->count() !== 0) {
                $data['data'][] = ['category_id' => $categoryId, 'category_name' => __('product_categories')[$categoryId], 'products' => $products];
            }
        }

        return response()->json($data);
    }
}
