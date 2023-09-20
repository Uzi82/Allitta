<?php

namespace Database\Factories\Shops;

use App\Enums\PathEnum;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Shops\Shop>
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
        return [
            'user_id' => null,
            'name' => $this->faker->company(),
            'category' => rand(1, 10),
            'reg_number' => rand(1000000, 10000000),
            'email' => $this->faker->email(),
            'phone_number' => $this->faker->phoneNumber(),
            'street' => $this->faker->streetAddress(),
            'city' => $this->faker->city(),
            'zip_code' => $this->faker->postcode(),
            'logotype_path' => PathEnum::SHOP_IMAGES_LOGOTYPES->value . 'no_shop_logotype.png',
            'banner_path' => PathEnum::SHOP_IMAGES_BANNERS->value . 'no_shop_banner.png'
        ];
    }
}
