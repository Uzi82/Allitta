<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
                MerchantUsersSeeder::class,
                CustomerUsersSeeder::class,
                EmailSubscriptionSeeders::class,
                ShopCategoriesSeeder::class,
                ShopsSeeder::class,
                ProductCategoriesSeeder::class,
                ProductSubcategoriesSeeder::class,
                ProductsSeeder::class,
                ProductOrdersSeeder::class,
                ProductOrderItemsSeeder::class,
            ]
        );
    }
}
