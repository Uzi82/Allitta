<?php

namespace Database\Factories\Orders;

use App\Enums\ProductOrderStatusEnum;
use App\Models\Orders\ProductOrder;
use App\Models\Shops\Shop;
use App\Models\Users\CustomerUser;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends Factory<ProductOrder>
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
        $status = ProductOrderStatusEnum::cases()[array_rand(ProductOrderStatusEnum::cases())]->value;
        $userId = CustomerUser::inRandomOrder()->first()->id;

        return [
            'user_id' => $userId,
            'shop_id' => Shop::inRandomOrder()->first()->id,
            'status' => $status,
            'amount' => 0,
            'delivery_code' => Str::random(6),
            'rating' => $status === ProductOrderStatusEnum::DONE->value ? rand(1, 5) : null,
        ];
    }
}
