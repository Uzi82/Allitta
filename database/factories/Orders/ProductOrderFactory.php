<?php

namespace Database\Factories\Orders;

use App\Enums\CurrencyEnum;
use App\Enums\ProductOrderStatusEnum;
use App\Models\Shops\Shop;
use App\Models\Users\CustomerUser;
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
        $userId = CustomerUser::inRandomOrder()->first()->id;

        return [
            'user_id' => $userId,
            'shop_id' => Shop::inRandomOrder()->first()->id,
            'status' => $statuses[array_rand($statuses)]->value,
            'amount' => 0,
            'currency' => CurrencyEnum::USD->value,
            'delivery_code' => Str::random(6),
            'rating' => rand(1, 5),
        ];
    }
}
