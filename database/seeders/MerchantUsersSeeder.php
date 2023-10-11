<?php

namespace Database\Seeders;

use App\Models\Users\MerchantUser;
use Illuminate\Database\Seeder;

class MerchantUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        MerchantUser::factory()->count(10)->create();
    }
}
