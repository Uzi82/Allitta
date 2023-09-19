<?php

namespace Database\Seeders;

use App\Models\Product;
use App\Models\Shop;
use Illuminate\Database\Seeder;

class ProductsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Shop::all()->each(function (Shop $shop) {
            Product::factory()
                ->count(10)
                ->create(['shop_id' => $shop->id]);
        });
    }
}
