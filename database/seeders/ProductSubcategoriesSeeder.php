<?php

namespace Database\Seeders;

use App\Enums\ProductCategoryEnum;
use App\Models\Products\ProductSubcategory;
use Illuminate\Database\Seeder;

class ProductSubcategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categoriesChildren = config('app.categories.category.children');

        foreach (ProductCategoryEnum::cases() as $category) {

            if (!empty($categoriesChildren[$category->value])) {

                foreach ($categoriesChildren[$category->value] as $childId) {
                    ProductSubcategory::create([
                        'id' => $childId,
                        'category_id' => $category->value,
                    ]);
                }
            }
        }
    }
}
