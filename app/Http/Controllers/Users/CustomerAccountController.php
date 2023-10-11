<?php

namespace App\Http\Controllers\Users;

use App\Enums\EmailVerifyEventEnum;
use App\Enums\UserTypesEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserLoginRequest;
use App\Http\Requests\UserRegisterRequest;
use App\Http\Requests\UserRestoreRequest;
use App\Models\Users\CustomerUser;
use App\Services\Users\UsersAccountService;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class CustomerAccountController extends Controller
{
    /**
     * @throws AuthenticationException
     */
    public function register(UserRegisterRequest $request): JsonResponse
    {
        $user = (new CustomerUser())->fill([
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

        (new UsersAccountService())->register($user, UserTypesEnum::CUSTOMER, EmailVerifyEventEnum::REGISTRATION);

        return response()->json(null, 201);
    }

    /**
     * @throws AuthenticationException
     */
    public function login(UserLoginRequest $request): void
    {
        $user = (new CustomerUser())->fill([
                'email' => $request->input('email'),
                'password' => $request->input('password')]
        );

        if (!(new UsersAccountService())->login($user, 'customer')) {
            throw new AuthenticationException('Invalid email or password');
        }

        $request->session()->regenerate();
    }

    /**
     * @throws AuthenticationException
     */
    public function restore(UserRestoreRequest $request): void
    {
        $user = (new CustomerUser())->fill([
                'email' => $request->input('email'),
                'password' => $request->input('password')]
        );

        (new UsersAccountService())->restore($user, UserTypesEnum::CUSTOMER, EmailVerifyEventEnum::PASSWORD_RESTORE);
    }

    public function logout(UserRestoreRequest $request): void
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
    }
}
