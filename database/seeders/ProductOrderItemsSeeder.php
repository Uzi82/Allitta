<?php

namespace Database\Seeders;

use App\Models\Orders\ProductOrder;
use App\Models\Orders\ProductOrderItem;
use App\Models\Products\Product;
use Illuminate\Database\Seeder;

class ProductOrderItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProductOrder::all()->each(function (ProductOrder $order) {
            $productCount = rand(1, 3);

            for ($i = 0; $i < $productCount; $i++) {
                $quantity = rand(1, 3);
                $product = Product::where('shop_id', $order->shop_id)->inRandomOrder()->first();

                ProductOrderItem::create(
                    [
                        'order_id' => $order->id,
                        'product_id' => $product->id,
                        'quantity' => $quantity,
                        'cost' => $product->cost
                    ]
                );

                $order->amount += $quantity * $product->cost;
            }

            $order->save();
        });
    }
}
