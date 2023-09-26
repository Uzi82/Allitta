<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\LimitRequest;
use App\Http\Resources\Products\Categories\ProductSubcategoryResource;
use App\Models\Products\ProductCategory;
use App\Models\Products\ProductSubcategory;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Validator;

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
        $categoryId = $request->route('id');

        $validator = Validator::make(['category_id' => $categoryId], [
            'category_id' => ['required', 'integer'],
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $category = ProductCategory::find($categoryId);

        if (!empty($category)) {
            $data = $category->subcategories->take($request->input('limit', 10));
        }

        return ProductSubcategoryResource::collection($data);
    }
}
