<?php

namespace Database\Seeders;

use App\Models\Users\ShopUser;
use Illuminate\Database\Seeder;

class ShopUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ShopUser::factory()->count(10)->create();
    }
}
