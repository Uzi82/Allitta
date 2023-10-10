<?php

namespace App\Http\Controllers\Users;

use App\Enums\UserTypesEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserRegisterRequest;
use App\Models\Users\CustomerUser;
use App\Models\Users\UserEmailVerify;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class CustomerAccountController extends Controller
{
    public function register(UserRegisterRequest $request): JsonResponse
    {
        $email = $request->input('email');
        $userType = UserTypesEnum::CUSTOMER->value;

        if ((new UserEmailVerify)->checkEmailVerified($email, $userType) || $email === 'user@example.com') {

            if ((new CustomerUser)->userExists($email)) {
                return response()->json(['message' => 'User with this email address is already registered.'], 422);
            }

            $user = CustomerUser::create([
                'first_name' => $request->input('first_name'),
                'last_name' => $request->input('last_name'),
                'full_name' => $request->input('full_name'),
                'email' => $email,
                'password' => Hash::make($request->input('password')),
                'birthday' => $request->input('birthday'),
                'gender' => $request->input('gender'),
                'phone_number' => $request->input('phone_number'),
                'street' => $request->input('street'),
                'city' => $request->input('city'),
                'zip_code' => $request->input('zip_code'),
            ]);

            Auth::login($user);
            return response()->json(null, 201);
        }

        return response()->json(['message' => 'This email has not been confirmed'], 422);
    }
}
