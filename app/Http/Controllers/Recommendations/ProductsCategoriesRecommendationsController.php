<?php

namespace App\Http\Controllers\Recommendations;

use App\Http\Controllers\Controller;
use App\Http\Requests\LimitRequest;
use App\Http\Resources\Products\Categories\ProductCategoryRecommendationResource;
use App\Services\Products\ProductCategoryRecommendationService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductsCategoriesRecommendationsController extends Controller
{
    public function bestCategories(LimitRequest $request, ProductCategoryRecommendationService $productCategoryRecommendationService): AnonymousResourceCollection
    {
        return ProductCategoryRecommendationResource::collection(
            $productCategoryRecommendationService->getBestCategories(
                $request->input('limit', 10)
            )
        );
    }
}
