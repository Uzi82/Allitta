<?php

namespace Database\Seeders;

use App\Models\OrderItem;
use App\Models\Product;
use App\Models\ProductOrder;
use Illuminate\Database\Seeder;

class OrderItemsSeeder extends Seeder
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

                OrderItem::create(
                    [
                        'order_id' => $order->id,
                        'product_id' => $product->id,
                        'user_id' => rand(1, 100000),
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
