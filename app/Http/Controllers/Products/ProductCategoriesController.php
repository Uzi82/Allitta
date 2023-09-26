<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductCategoryRequest;
use App\Http\Resources\Products\Categories\ProductCategoryImageResource;
use App\Http\Resources\Products\Categories\ProductCategoryResource;
use App\Models\Products\ProductCategory;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductCategoriesController extends Controller
{
    public function getProductCategories(ProductCategoryRequest $request): AnonymousResourceCollection
    {
        $query = ProductCategory::select('id')->where('visible', true)->limit($request->input('limit', 10));

        if ($request->input('image', false)) {
            $query->addSelect('logotype_path');
            return ProductCategoryImageResource::collection($query->get());
        }

        return ProductCategoryResource::collection($query->get());
    }
}
