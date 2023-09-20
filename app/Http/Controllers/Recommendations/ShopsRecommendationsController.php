<?php

namespace App\Http\Controllers\Recommendations;

use App\Http\Controllers\Controller;
use App\Http\Requests\LimitRequest;
use App\Http\Resources\Products\shops\ShopRecommendationResource;
use App\Services\Shops\ShopRecommendationService;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class ShopsRecommendationsController extends Controller
{
    public function bestShops(LimitRequest $request, ShopRecommendationService $shopRecommendationService): AnonymousResourceCollection
    {
        $limit = $request->input('limit', 10);
        return ShopRecommendationResource::collection($shopRecommendationService->bestShops($limit));
    }
}
