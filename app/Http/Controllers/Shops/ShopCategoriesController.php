<?php

namespace App\Http\Controllers\Shops;

use App\Http\Controllers\Controller;
use App\Http\Resources\Shops\ShopCategoryResource;
use App\Models\Shops\ShopCategory;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ShopCategoriesController extends Controller
{
    public function index(): AnonymousResourceCollection
    {
        return ShopCategoryResource::collection(ShopCategory::all());
    }
}
