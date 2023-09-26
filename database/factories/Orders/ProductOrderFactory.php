<?php

namespace Database\Factories\Orders;

use App\Enums\CurrencyEnum;
use App\Enums\ProductOrderStatusEnum;
use App\Models\Shops\Shop;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Orders\ProductOrder>
 */
class ProductOrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $statuses = ProductOrderStatusEnum::cases();

        return [
            'user_id' => rand(1, 100000),
            'shop_id' => Shop::inRandomOrder()->first()->id,
            'status' => $statuses[array_rand($statuses)]->value,
            'amount' => 0,
            'currency' => CurrencyEnum::USD->value,
            'delivery_code' => Str::random(6)
        ];
    }
}
