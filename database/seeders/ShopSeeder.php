<?php

namespace Database\Seeders;

use App\Models\Shop;
use App\Models\ShopUser;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ShopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ShopUser::all()->each(function (ShopUser $user) {
            Shop::factory()->create(['user_id' => $user->id]);
        });
    }
}
