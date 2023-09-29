<?php

namespace Database\Seeders;

use App\Models\Users\EmailSubscription;
use Illuminate\Database\Seeder;

class EmailSubscriptionSeeders extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        EmailSubscription::factory()->count(50)->create();
    }
}
