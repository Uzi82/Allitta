<?php

namespace App\Http\Controllers\Users\Merchant;

use App\Http\Controllers\Controller;
use App\Http\Requests\LimitRequest;
use App\Models\Shops\Shop;
use App\Models\Users\MerchantUser;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class MerchantShopsDashboardController extends Controller
{
    public function show(LimitRequest $request): JsonResponse
    {
        $data = [];
        $shopId = $this->getId($request);

        if ((new MerchantUser())->hasShop($shopId, Auth::id())) {
            $data['summary'] = (new Shop())->getDashboardSummaryByShopId($shopId);
        } else {
            return response()->json(['message' => 'This shop does not belong to you!'], 422);
        }

        return response()->json($data);
    }
}
