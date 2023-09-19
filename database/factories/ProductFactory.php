<?php

namespace Database\Factories;

use App\Enums\PathEnum;
use App\Enums\ProductStatusEnum;
use App\Models\ProductCategory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $statuses = ProductStatusEnum::cases();

        return [
            'shop_id' => null,
            'name' => $this->faker->words(2, true),
            'logotype_path' => PathEnum::PRODUCT_IMAGES_LOGOTYPES->value . 'no_product_logotype.png',
            'images' => '[]',
            'description' => $this->faker->sentence(10),
            'status' => $statuses[array_rand($statuses)]->value,
            'category_id' => ProductCategory::inRandomOrder()->first(),
            'subcategory' => rand(1, 5),
            'active' => (bool)rand(0, 1),
            'draft' => (bool)rand(0, 1),
            'quantity' => rand(0, 100),
            'currency' => rand(0, 3),
            'cost' => rand(100, 5000)
        ];
    }
}
