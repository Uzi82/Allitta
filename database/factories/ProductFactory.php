<?php

namespace Database\Factories;

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
        return [
            'shop_id' => null,
            'name' => $this->faker->words(2, true),
            'logotype_path' => 'storage/images/no_product_logotype.png',
            'images' => '[]',
            'description' => $this->faker->sentence(10),
            'category' => rand(1, 10),
            'subcategory' => rand(1, 5),
            'active' => (bool)rand(0, 1),
            'draft' => (bool)rand(0, 1),
            'quantity' => rand(0, 100),
            'currency' => rand(0, 3),
            'cost' => rand(100, 5000)
        ];
    }
}
