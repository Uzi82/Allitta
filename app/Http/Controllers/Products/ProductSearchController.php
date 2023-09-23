<?php

namespace App\Http\Controllers\Products;

use App\Filters\Products\ProductNameFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductSearchRequest;
use App\Http\Resources\Products\ProductSearchResource;
use App\Models\Products\Product;
use App\Services\Filters\FiltersService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductSearchController extends Controller
{
    public function search(ProductSearchRequest $request, FiltersService $filtersService): AnonymousResourceCollection
    {
        $query = Product::query();
        $filtersService->addFilter(new ProductNameFilter($request->input('name', '')));

        return ProductSearchResource::collection(
            $filtersService->applyFilters($query)->limit($request->input('limit', 10))->get()
        );
    }
}
