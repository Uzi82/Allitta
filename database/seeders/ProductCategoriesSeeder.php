<?php

namespace Database\Seeders;

use App\Enums\NoFilePathEnum;
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
                'logotype_path' => PathEnum::PRODUCT_IMAGES_CATEGORIES->value . '/logotype_' . $category->value . '.png',
                'banner_path' => PathEnum::PRODUCT_IMAGES_CATEGORIES->value . NoFilePathEnum::NO_CATEGORY_BANNER->value,
            ]);
        }
    }
}
