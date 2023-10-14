<?php

namespace Database\Factories\Products;

use App\Enums\CurrencyEnum;
use App\Enums\NoFilePathEnum;
use App\Enums\PathEnum;
use App\Enums\ProductStatusEnum;
use App\Models\Products\Product;
use App\Models\Products\ProductCategory;
use App\Services\Searching\TextSearchService;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<Product>
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
        $currencies = CurrencyEnum::cases();
        $name = $this->faker->words(2, true);
        $categoryId = ProductCategory::inRandomOrder()->first()->id;
        $categoryChildren = config('app.categories.category.children')[$categoryId];

        return [
            'shop_id' => null,
            'name' => $name,
            'name_tsvector' => (new TextSearchService())->getTsVector($name),
            'logotype_path' => PathEnum::PRODUCT_IMAGES_LOGOTYPES->value . NoFilePathEnum::NO_PRODUCT_LOGOTYPE->value,
            'images' => '[]',
            'description' => $this->faker->sentence(10),
            'status' => $statuses[array_rand($statuses)]->value,
            'category_id' => $categoryId,
            'subcategory_id' => $categoryChildren[array_rand($categoryChildren)],
            'active' => (bool)rand(0, 1),
            'draft' => (bool)rand(0, 1),
            'quantity' => rand(0, 100),
            'currency' => $currencies[array_rand($currencies)]->value,
            'cost' => rand(100, 5000)
        ];
    }
}
