<?php

namespace Database\Seeders;

use App\Models\Shops\Shop;
use App\Models\Users\MerchantUser;
use Illuminate\Database\Seeder;

class ShopsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MerchantUser::all()->each(function (MerchantUser $user) {
            Shop::factory()->create(['user_id' => $user->id]);
        });
    }
}
