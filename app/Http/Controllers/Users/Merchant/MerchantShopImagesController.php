<?php

namespace App\Http\Controllers\Users\Merchant;

use App\Enums\PathEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\MerchantShopImageRequest;
use App\Models\Shops\Shop;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class MerchantShopImagesController extends Controller
{
    public function logotype(MerchantShopImageRequest $request): JsonResponse
    {
        $path = $request->file('photo')->store(PathEnum::SHOP_IMAGES_LOGOTYPES->value);

        Shop::where('id', $request->input('shop_id'))
            ->where('user_id', Auth::id())
            ->update(['logotype_path' => $path]);

        return response()->json(['logotype' => asset($path)]);
    }

    public function banner(MerchantShopImageRequest $request): JsonResponse
    {
        $path = $request->file('photo')->store(PathEnum::SHOP_IMAGES_BANNERS->value);

        Shop::where('id', $request->input('shop_id'))
            ->where('user_id', Auth::id())
            ->update(['banner_path' => $path]);

        return response()->json(['banner' => asset($path)]);
    }
}
