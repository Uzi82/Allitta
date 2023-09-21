<?php

namespace App\Http\Controllers\Recommendations;

use App\Http\Controllers\Controller;
use App\Http\Requests\LimitRequest;
use App\Http\Resources\Products\ProductRecommendationResource;
use App\Services\Products\ProductRecommendationService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ProductsRecommendationsController extends Controller
{
    public function bestProducts(LimitRequest $request, ProductRecommendationService $productRecommendationService): AnonymousResourceCollection
    {
        $limit = $request->input('limit', 10);
        return ProductRecommendationResource::collection($productRecommendationService->getBestProducts($limit));
    }

    public function personal(LimitRequest $request, ProductRecommendationService $productRecommendationService): AnonymousResourceCollection
    {
        $limit = $request->input('limit', 10);
        return ProductRecommendationResource::collection($productRecommendationService->getPersonalBestProducts($limit));
    }
}
