<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\LimitRequest;
use App\Models\ProductCategory;

class ProductCategories extends Controller
{
    public function index(LimitRequest $request)
    {
        $limit = $request->input('limit', 10);
        $categories = ProductCategory::select('id', 'img_path')->where('visible', true)->limit($limit)->get();

        foreach ($categories as $category) {
            $category->img_path = asset($category->img_path);
            $category->name = __('categories')[$category->id];
        }

        return $categories;
    }
}
