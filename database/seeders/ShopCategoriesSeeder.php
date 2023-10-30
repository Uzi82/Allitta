<?php

namespace Database\Seeders;

use App\Enums\ShopCategoryEnum;
use App\Models\Shops\ShopCategory;
use Illuminate\Database\Seeder;

class ShopCategoriesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        foreach (ShopCategoryEnum::cases() as $category) {
            ShopCategory::create([
                'id' => $category->value,
            ]);
        }
    }
}
