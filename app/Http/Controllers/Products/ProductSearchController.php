<?php

namespace App\Http\Controllers\Products;

use App\Enums\ComparisonEnum;
use App\Enums\ProductOrderByEnum;
use App\Filters\Products\ProductCategoryFilter;
use App\Filters\Products\ProductCostFilter;
use App\Filters\Products\ProductNameFilter;
use App\Filters\Products\ProductOrderByFilter;
use App\Filters\Products\ProductSubcategoryFilter;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductSearchRequest;
use App\Http\Resources\Products\ProductSearchResource;
use App\Models\Products\Product;
use App\Services\Filters\FiltersService;

class ProductSearchController extends Controller
{
    public function search(ProductSearchRequest $request, FiltersService $filtersService)
    {
        $query = Product::query();

        $filtersService->addFilter(new ProductNameFilter($request->input('name', '')));
        $filtersService->addFilter(new ProductCategoryFilter($request->input('category', [])));
        $filtersService->addFilter(new ProductSubcategoryFilter($request->input('subcategory', [])));
        $filtersService->addFilter(new ProductCostFilter(
            $request->input('cost', 0),
            $request->input('comparison', ComparisonEnum::EQUAL->value),
        ));

        $filtersService->addFilter(new ProductOrderByFilter($request->input('order_by', ProductOrderByEnum::POPULARITY->value)));

        $query = $filtersService->applyFilters($query)
            ->leftJoin('shops', 'shops.id', '=', 'products.shop_id')
            ->where('shops.active', true)
            ->select('products.id', 'products.name', 'products.logotype_path', 'products.currency', 'products.cost')
            ->paginate($request->input('per_page'));

        $data = [
            'data' => ProductSearchResource::collection($query),
            'total' => $query->total(),
            'current_page' => $query->currentPage(),
            'last_page' => $query->lastPage(),
        ];

        return response()->json($data);
    }
}
