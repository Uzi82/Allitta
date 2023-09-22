<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\LimitRequest;
use App\Http\Resources\Products\Categories\ProductCategoryResource;
use App\Models\Products\ProductCategory;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductCategoriesController extends Controller
{
    public function index(LimitRequest $request): AnonymousResourceCollection
    {
        return ProductCategoryResource::collection(
            ProductCategory::select('id', 'logotype_path')->where('visible', true)->limit(
                $request->input('limit', 10)
            )->get()
        );
    }
}
