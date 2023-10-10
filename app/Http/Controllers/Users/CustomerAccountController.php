<?php

namespace App\Http\Controllers\Users;

use App\Enums\UserTypesEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRegisterRequest;
use App\Models\Users\CustomerUser;
use App\Services\Users\UsersAccountService;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\JsonResponse;
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

        (new UsersAccountService())->register($user, UserTypesEnum::CUSTOMER);

        return response()->json(null, 201);
    }
}
