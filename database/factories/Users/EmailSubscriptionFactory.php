<?php

namespace Database\Factories\Users;

use App\Models\Users\MerchantUser;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<MerchantUser>
 */
class EmailSubscriptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        return [
            'email' => $this->faker->email(),
        ];
    }
}
