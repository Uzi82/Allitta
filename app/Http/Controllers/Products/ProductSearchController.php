<?php

namespace App\Http\Controllers\Products;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductSearchRequest;
use App\Http\Resources\Products\ProductSearchResource;
use App\Models\Products\Product;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductSearchController extends Controller
{
    public function search(ProductSearchRequest $request): AnonymousResourceCollection
    {
        return ProductSearchResource::collection(
            Product::searchByName($request->input('name', ''))
                ->limit($request->input('limit', 10))
                ->get()
        );
    }
}
