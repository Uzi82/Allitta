<?php

namespace App\Models\Shops;

use App\Enums\ProductOrderStatusEnum;
use App\Enums\ProductStatusEnum;
use App\Models\Orders\ProductOrder;
use App\Models\Products\Product;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Support\Facades\DB;
use stdClass;

class Shop extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'name', 'category_id', 'reg_number', 'email', 'phone_number', 'street', 'city', 'zip_code', 'description'];

    public function productOrders(): HasMany
    {
        return $this->hasMany(ProductOrder::class);
    }

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }

    public function getInfoByShopId(int $shopId)
    {
        return Shop::select('id', 'name', 'logotype_path', 'banner_path', 'description')
            ->withAvg('productOrders as rating', 'rating')
            ->where('id', $shopId)
            ->where('active', true)
            ->first();
    }

    public function getDashboardSummaryByShopId(int $shopId): stdClass
    {
        return DB::query()
            ->select(DB::raw('(SELECT COUNT(*) FROM products WHERE shop_id = ?) AS total_products'))
            ->addSelect(DB::raw('(SELECT COUNT(*) FROM product_orders WHERE shop_id = ?) AS total_sales'))
            ->addSelect(DB::raw('(SELECT COUNT(*) FROM product_orders WHERE shop_id = ? AND status NOT IN (?, ?)) AS pending_orders'))
            ->addSelect(DB::raw('(SELECT COUNT(*) FROM product_orders WHERE shop_id = ? AND status = ?) AS on_process_delivery'))
            ->addBinding([
                $shopId,
                $shopId,
                $shopId,
                [ProductOrderStatusEnum::DONE->value, ProductOrderStatusEnum::LOSE->value],
                $shopId,
                ProductOrderStatusEnum::ON_DELIVERY->value
            ])
            ->first();
    }

    public function getDashboardStockProductsByShopId(int $shopId, int $limit): Collection
    {
        return Product::select('id', 'name')
            ->where('shop_id', $shopId)
            ->where('status', '!=', ProductStatusEnum::UNAVAILABLE->value)
            ->selectRaw('ROUND((CAST(quantity AS DECIMAL) / CAST(last_stock_quantity AS DECIMAL)) * 100) AS available_stock_percent')
            ->orderBy('available_stock_percent')
            ->limit($limit)
            ->get();
    }

    public function getDashboardStockSummaryByShopId(int $shopId): float
    {
        return (float)Product::where('shop_id', $shopId)
            ->where('status', '!=', ProductStatusEnum::UNAVAILABLE->value)
            ->selectRaw('ROUND((SUM(quantity::decimal) / SUM(last_stock_quantity::decimal)) * 100, 2) AS available_stock_percent')
            ->value('available_stock_percent');
    }
}
