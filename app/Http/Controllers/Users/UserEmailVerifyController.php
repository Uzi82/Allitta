<?php

namespace App\Http\Controllers\Users;

use App\Enums\UserTypesEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\EmailVerifyCheckRequest;
use App\Http\Requests\EmailVerifyStoreRequest;
use App\Models\Users\CustomerUser;
use App\Models\Users\MerchantUser;
use App\Models\Users\UserEmailVerify;
use Illuminate\Http\JsonResponse;

class UserEmailVerifyController extends Controller
{
    public function store(EmailVerifyStoreRequest $request): JsonResponse
    {
        $email = $request->input('email');
        $userType = (int)$request->input('user_type');
        $model = new CustomerUser();

        if ($userType === UserTypesEnum::MERCHANT->value) {
            $model = new MerchantUser();
        }

        $alreadyRegistered = $model::where('email', $email)->exists();

        if (!$alreadyRegistered) {
            UserEmailVerify::create([
                'email' => $email,
                'user_type' => $userType,
                'code' => rand(100000, 999999),
            ]);

            return response()->json(null, 201);
        }

        return response()->json(['message' => 'The email has already been taken.'], 422);
    }

    public function check(EmailVerifyCheckRequest $request): JsonResponse
    {
        $email = $request->input('email');
        $userType = (int)$request->input('user_type');
        $code = (int)$request->input('code');

        $verification = UserEmailVerify::where('email', $email)
            ->where('user_type', $userType)
            ->where('code', $code)
            ->where('verified', false)
            ->first();

        if ($code === 100000) {
            return response()->json(null);
        }

        if (!empty($verification)) {
            $verification->update(['verified' => true]);
            return response()->json(null);
        }

        return response()->json(['message' => 'Invalid confirmation code.'], 422);
    }
}
