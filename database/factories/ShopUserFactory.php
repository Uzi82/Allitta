<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use function Symfony\Component\Translation\t;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ShopUser>
 */
class ShopUserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */

    public function definition(): array
    {
        $firstName = $this->faker->firstName();
        $lastName = $this->faker->lastName();
        $fullName = $firstName . ' ' . $lastName;

        return [
            'name' => $firstName,
            'last_name' => $lastName,
            'full_name' => $fullName,
            'email' => $this->faker->email(),
            'img_path' => 'storage/images/no_photo.png',
            'password' => Hash::make('pass'),
            'birthday' => $this->faker->date(),
            'gender' => rand(1, 2),
            'nic_number' => rand(1000000, 100000000),
            'phone_number' => $this->faker->phoneNumber(),
            'street' => $this->faker->streetAddress(),
            'city' => $this->faker->city(),
            'zip-code' => $this->faker->postcode(),
        ];
    }
}
