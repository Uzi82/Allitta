<?php

namespace App\Http\Controllers\Users\Merchant;

use App\Enums\EmailVerifyEventEnum;
use App\Enums\UserTypesEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Requests\UserRestoreRequest;
use App\Models\Users\MerchantUser;
use App\Services\Users\UsersAccountService;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class MerchantAccountController extends Controller
{
    /**
     * @throws AuthenticationException
     */
    public function register(UserRegisterRequest $request): JsonResponse
    {
        $user = (new MerchantUser())->fill([
            'first_name' => $request->input('first_name'),
            'last_name' => $request->input('last_name'),
            'full_name' => $request->input('full_name'),
            'email' => $request->input('email'),
            'password' => Hash::make($request->input('password')),
            'birthday' => $request->input('birthday'),
            'gender' => $request->input('gender'),
            'phone_number' => $request->input('phone_number'),
            'street' => $request->input('street'),
            'city' => $request->input('city'),
            'zip_code' => $request->input('zip_code')],
        );

        $userAccountService = new UsersAccountService();
        $token = $userAccountService->register($user, UserTypesEnum::MERCHANT, EmailVerifyEventEnum::REGISTRATION);

        return $userAccountService->respondWithToken($token);
    }

    /**
     * @throws AuthenticationException
     */
    public function login(UserLoginRequest $request): JsonResponse
    {
        $user = (new MerchantUser())->fill([
                'email' => $request->input('email'),
                'password' => $request->input('password')]
        );

        $userAccountService = new UsersAccountService();
        $token = $userAccountService->login($user, 'merchant');

        return $userAccountService->respondWithToken($token);
    }

    /**
     * @throws AuthenticationException
     */
    public function restore(UserRestoreRequest $request): void
    {
        $user = (new MerchantUser())->fill([
                'email' => $request->input('email'),
                'password' => $request->input('password')]
        );

        (new UsersAccountService())->restore($user, UserTypesEnum::MERCHANT, EmailVerifyEventEnum::PASSWORD_RESTORE);
    }

    public function logout(): void
    {
        Auth::logout();
    }

    public function refresh(): JsonResponse
    {
        return (new UsersAccountService())->respondWithToken(Auth::refresh());
    }
}
