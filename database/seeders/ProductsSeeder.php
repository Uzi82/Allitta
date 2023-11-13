<?php

namespace Database\Seeders;

use App\Models\Products\Product;
use App\Models\Shops\Shop;
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
                ->count(25)
                ->create(['shop_id' => $shop->id]);
        });
    }
}
