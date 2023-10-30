<?php

namespace App\Models\Shops;

use App\Enums\ProductOrderStatusEnum;
use App\Models\Orders\ProductOrder;
use App\Models\Products\Product;
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
}
