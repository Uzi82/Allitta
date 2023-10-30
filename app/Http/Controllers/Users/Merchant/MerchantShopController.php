<?php

namespace App\Http\Controllers\Users\Merchant;

use App\Http\Controllers\Controller;
use App\Http\Requests\LimitRequest;
use App\Http\Requests\MerchantStoreShopRequest;
use App\Http\Resources\Users\MerchantShopsDashboardResource;
use App\Models\Shops\Shop;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;

class MerchantShopController extends Controller
{

    public function index(LimitRequest $request): AnonymousResourceCollection
    {
        return MerchantShopsDashboardResource::collection(Shop::select(['id', 'name', 'logotype_path'])
            ->where('user_id', Auth::id())
            ->limit($request->input('limit', 10))
            ->get());
    }

    public function store(MerchantStoreShopRequest $request): JsonResponse
    {
        try {
            $shop = Shop::create(
                [
                    'user_id' => Auth::id(),
                    'name' => $request->input('name'),
                    'description' => $request->input('description'),
                    'category_id' => $request->input('category_id'),
                    'reg_number' => $request->input('reg_number'),
                    'email' => $request->input('email'),
                    'phone_number' => $request->input('phone_number'),
                    'street' => $request->input('street'),
                    'city' => $request->input('city'),
                    'zip_code' => $request->input('zip_code'),
                ]
            );
        } catch (UniqueConstraintViolationException) {
            return response()->json(['error' => 'A store with this registration number already exists'], 422);
        }


        return response()->json(['shop_id' => $shop->id], 201);
    }
}
