<?php

namespace Database\Factories\Shops;

use App\Models\Shops\Shop;
use App\Models\Shops\ShopCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Shop>
 */
class ShopFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categoryId = ShopCategory::inRandomOrder()->first()->id;

        return [
            'user_id' => null,
            'name' => $this->faker->company(),
            'category_id' => $categoryId,
            'reg_number' => rand(1000000, 10000000),
            'email' => $this->faker->email(),
            'phone_number' => $this->faker->phoneNumber(),
            'street' => $this->faker->streetAddress(),
            'city' => $this->faker->city(),
            'zip_code' => $this->faker->postcode(),
            'description' => $this->faker->text(500),
        ];
    }
}
