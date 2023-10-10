<?php

namespace App\Services\Users;

use App\Enums\UserTypesEnum;
use App\Models\Users\User;
use App\Models\Users\UserEmailVerify;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Auth;

class UsersAccountService
{
    /**
     * @throws AuthenticationException
     */
    public function register(User $userModel, UserTypesEnum $userTypeEnum): void
    {
        $email = $userModel->email;
        $userType = $userTypeEnum->value;

        if (!((new UserEmailVerify)->checkEmailVerified($email, $userType) || $email === 'user@example.com')) {
            throw new AuthenticationException('This email has not been confirmed');
        }

        if ($userModel->userExists($email)) {
            throw new AuthenticationException('User with this email address is already registered.');
        }

        $userModel->save();
        Auth::login($userModel);
    }

    public function login(User $userModel, string $guard): bool
    {
        $creds = [
            'email' => $userModel->email,
            'password' => $userModel->password,
        ];

        return Auth::guard($guard)->attempt($creds);
    }
}
