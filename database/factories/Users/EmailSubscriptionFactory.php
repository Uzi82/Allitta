<?php

namespace Database\Factories\Users;

use App\Models\Users\ShopUser;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<ShopUser>
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
