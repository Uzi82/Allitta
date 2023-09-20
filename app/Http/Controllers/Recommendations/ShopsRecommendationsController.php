<?php

namespace App\Http\Controllers\Recommendations;

use App\Http\Controllers\Controller;
use App\Http\Requests\LimitRequest;
use App\Models\Shop;
use Illuminate\Support\Facades\DB;

class ShopsRecommendationsController extends Controller
{
    public function bestShops(LimitRequest $request)
    {
        $limit = $request->input('limit', 10);

        $shops = Shop::rightJoin('products', 'shops.id', '=', 'products.shop_id')
            ->groupBy('shops.id', 'shops.name', 'shops.logotype_path')
            ->select('shops.id', 'shops.name', 'shops.logotype_path', DB::raw('count(*) as products'))
            ->orderBy('products', 'DESC')
            ->limit($limit)
            ->get();

        foreach ($shops as $shop) {
            $shop->logotype_path = asset($shop->logotype_path);
        }

        return $shops;
    }
}
