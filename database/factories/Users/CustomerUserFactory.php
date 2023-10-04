<?php

namespace Database\Factories\Users;

use App\Enums\PathEnum;
use App\Models\Users\MerchantUser;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;

/**
 * @extends Factory<MerchantUser>
 */
class CustomerUserFactory extends Factory
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
            'img_path' => PathEnum::USER_IMAGES_PROFILE->value . 'no_photo.png',
            'password' => Hash::make('pass'),
            'birthday' => $this->faker->date(),
            'gender' => rand(1, 2),
            'phone_number' => $this->faker->phoneNumber(),
            'street' => $this->faker->streetAddress(),
            'city' => $this->faker->city(),
            'zip-code' => $this->faker->postcode(),
        ];
    }
}
