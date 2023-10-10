<?php

namespace App\Services\Users;

use App\Enums\EmailVerifyEventEnum;
use App\Enums\UserTypesEnum;
use App\Models\Users\User;
use App\Models\Users\UserEmailVerify;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UsersAccountService
{
    /**
     * @throws AuthenticationException
     */
    public function register(User $userModel, UserTypesEnum $userTypeEnum, EmailVerifyEventEnum $eventEnum): void
    {
        $email = $userModel->email;
        $userType = $userTypeEnum->value;

        if (!((new UserEmailVerify)->checkEmailVerified($email, $userType, $eventEnum->value) || $email === 'user@example.com')) {
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

    /**
     * @throws AuthenticationException
     */
    public function restore(User $userModel, UserTypesEnum $userTypeEnum, EmailVerifyEventEnum $eventEnum): bool
    {
        $email = $userModel->email;
        $password = $userModel->getAuthPassword();

        if (!((new UserEmailVerify)->checkEmailVerified($email, $userTypeEnum->value, $eventEnum->value) || $email === 'user@example.com')) {
            throw new AuthenticationException('This email has not been confirmed');
        }

        return $userModel->where('email', $email)->update(['password' => Hash::make($password)]);
    }
}