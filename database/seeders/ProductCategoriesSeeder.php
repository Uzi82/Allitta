<?php

namespace Database\Seeders;

use App\Enums\PathEnum;
use App\Enums\ProductCategoryEnum;
use App\Models\Products\ProductCategory;
use Illuminate\Database\Seeder;

class ProductCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (ProductCategoryEnum::cases() as $category) {
            ProductCategory::create([
                'id' => $category->value,
                'img_path' => PathEnum::PRODUCT_IMAGES_CATEGORIES->value . $category->value . '.png',
            ]);
        }
    }
}
