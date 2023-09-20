<?php

namespace Database\Seeders;

use App\Models\ProductOrder;
use Illuminate\Database\Seeder;

class ProductOrdersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProductOrder::factory()->count(50)->create();
    }
}
