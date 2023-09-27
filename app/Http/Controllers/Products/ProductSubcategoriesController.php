<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\LimitRequest;
use App\Http\Resources\Products\Categories\ProductSubcategoryResource;
use App\Models\Products\ProductCategory;
use App\Models\Products\ProductSubcategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductSubcategoriesController extends Controller
{
    public function getProductSubcategories(LimitRequest $request): AnonymousResourceCollection
    {
        return ProductSubcategoryResource::collection(
            ProductSubcategory::select('id', 'category_id')->where('visible', true)->limit(
                $request->input('limit', 10)
            )->get()
        );
    }

    public function getProductSubcategoriesByCategory(LimitRequest $request): AnonymousResourceCollection|JsonResponse
    {
        $data = [];
        $category = ProductCategory::find($this->getId($request));

        if (!empty($category)) {
            $data = $category->subcategories->take($request->input('limit', 10));
        }

        return ProductSubcategoryResource::collection($data);
    }
}
