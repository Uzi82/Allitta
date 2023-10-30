<?php

namespace App\Models\Shops;

use App\Enums\ProductOrderStatusEnum;
use App\Models\Orders\ProductOrder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Shop extends Model
{
    use HasFactory;

    protected $fillable = ['user_id', 'name', 'category_id', 'reg_number', 'email', 'phone_number', 'street', 'city', 'zip_code', 'description'];

    public function productOrders(): HasMany
    {
        return $this->hasMany(ProductOrder::class, 'shop_id');
    }

    public function getInfoByShopId(int $shopId)
    {
        return Shop::select('id', 'name', 'logotype_path', 'banner_path', 'description')
            ->withAvg('productOrders as rating', 'rating')
            ->whereHas('productOrders', function ($query) {
                $query->where('status', ProductOrderStatusEnum::DONE);
            })
            ->where('id', $shopId)
            ->where('active', true)
            ->first();
    }
}
