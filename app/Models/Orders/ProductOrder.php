<?php

namespace App\Models\Orders;

use App\Models\Shops\Shop;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Facades\DB;

class ProductOrder extends Model
{
    use HasFactory;

    public function shop(): BelongsTo
    {
        return $this->belongsTo(Shop::class);
    }

    public function getLastOrdersByShopId(int $shopId, int $limit)
    {
        return ProductOrder::select(
            'product_orders.id',
            'customer_users.full_name',
            'product_orders.created_at',
            DB::raw('ROUND(CAST(product_orders.amount AS DECIMAL), 2) as amount'),
            'product_orders.currency',
            'product_orders.status'
        )
            ->where('shop_id', $shopId)
            ->leftJoin('customer_users', 'customer_users.id', '=', 'product_orders.user_id')
            ->orderByDesc('product_orders.id')
            ->limit($limit)
            ->get();
    }
}
