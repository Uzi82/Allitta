<?php

namespace Database\Seeders;

use App\Models\Users\CustomerUser;
use Illuminate\Database\Seeder;

class CustomerUsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CustomerUser::factory()->count(100)->create();
    }
}
