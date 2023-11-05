<?php

namespace App\Http\Controllers\Users\Merchant;

use App\Http\Controllers\Controller;
use App\Http\Requests\LimitRequest;
use App\Http\Resources\Users\MerchantShopDashboardNewOrdersResource;
use App\Http\Resources\Users\MerchantShopDashboardStockProductsResource;
use App\Models\Orders\ProductOrder;
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

            $stockProducts = (new Shop())->getDashboardStockProductsByShopId($shopId, $request->input('limit', 10));

            $stockProducts = $stockProducts->reject(function ($item) {
                return $item->available_stock_percent >= 50;
            });

            $data['stock_products'] = MerchantShopDashboardStockProductsResource::collection($stockProducts);
            $data['available_stock_percent'] = (new Shop())->getDashboardStockSummaryByShopId($shopId);

            $data['new_orders'] = MerchantShopDashboardNewOrdersResource::collection((new ProductOrder())->getLastOrdersByShopId($shopId, 10));
        } else {
            return response()->json(['message' => 'This shop does not belong to you!'], 422);
        }

        return response()->json($data);
    }
}
