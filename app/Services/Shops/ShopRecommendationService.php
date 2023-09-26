<?php

namespace App\Services\Shops;

use App\Models\Shops\Shop;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\DB;

class ShopRecommendationService
{
    public function bestShops(int $limit): Collection
    {
        return Shop::rightJoin('products', 'shops.id', '=', 'products.shop_id')
            ->groupBy('shops.id', 'shops.name', 'shops.logotype_path')
            ->select('shops.id', 'shops.name', 'shops.logotype_path', DB::raw('count(*) as products_count'))
            ->where('shops.active', true)
            ->orderBy('products_count', 'DESC')
            ->limit($limit)
            ->get();
    }
}
