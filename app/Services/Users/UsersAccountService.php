<?php

namespace App\Services\Users;

use App\Enums\EmailVerifyEventEnum;
use App\Enums\UserTypesEnum;
use App\Models\Users\User;
use App\Models\Users\UserEmailVerify;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UsersAccountService
{
    /**
     * @throws AuthenticationException
     */
    public function register(User $userModel, UserTypesEnum $userTypeEnum, EmailVerifyEventEnum $eventEnum): string
    {
        $email = $userModel->email;
        $userType = $userTypeEnum->value;

        if (!((new UserEmailVerify)->checkEmailVerified($email, $userType, $eventEnum->value))) {
            throw new AuthenticationException('This email has not been confirmed');
        }

        if ($userModel->userExists($email)) {
            throw new AuthenticationException('User with this email address is already registered.');
        }

        $userModel->save();

        return Auth::login($userModel);
    }

    /**
     * @throws AuthenticationException
     */
    public function login(User $userModel, string $guard): string
    {
        $credentials = [
            'email' => $userModel->email,
            'password' => $userModel->password,
        ];

        if ($token = Auth::guard($guard)->attempt($credentials)) {
            return $token;
        }

        throw new AuthenticationException('Invalid email or password');
    }

    /**
     * @throws AuthenticationException
     */
    public function restore(User $userModel, UserTypesEnum $userTypeEnum, EmailVerifyEventEnum $eventEnum): bool
    {
        $email = $userModel->email;
        $password = $userModel->getAuthPassword();

        if (!((new UserEmailVerify)->checkEmailVerified($email, $userTypeEnum->value, $eventEnum->value))) {
            throw new AuthenticationException('This email has not been confirmed');
        }

        return $userModel->where('email', $email)->update(['password' => Hash::make($password)]);
    }

    public function respondWithToken(string $token): JsonResponse
    {
        return response()->json([
            'jwt_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => Auth::factory()->getTTL()
        ]);
    }
}
