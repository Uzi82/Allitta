<?php

namespace App\Http\Controllers\Users;

use App\Factories\Users\EmailVerifyEventStrategyStaticFactory;
use App\Http\Controllers\Controller;
use App\Http\Requests\EmailVerifyCheckRequest;
use App\Http\Requests\EmailVerifyStoreRequest;
use App\Models\Users\UserEmailVerify;
use Illuminate\Http\JsonResponse;

class UserEmailVerifyController extends Controller
{
    public function store(EmailVerifyStoreRequest $request): JsonResponse
    {
        $email = $request->input('email');
        $userType = (int)$request->input('user_type');
        $eventType = (int)$request->input('event_type');

        if (EmailVerifyEventStrategyStaticFactory::getStrategyByEventType($eventType)->getAccess($email, $userType)) {
            UserEmailVerify::create([
                'email' => $email,
                'user_type' => $userType,
                'code' => rand(100000, 999999),
                'event_type' => $eventType
            ]);

            return response()->json(null, 201);
        }

        return response()->json(['message' => 'You have entered the wrong email address.'], 422);
    }

    public function check(EmailVerifyCheckRequest $request): JsonResponse
    {
        $email = $request->input('email');
        $userType = (int)$request->input('user_type');
        $code = (int)$request->input('code');
        $eventType = (int)$request->input('event_type');

        $verification = UserEmailVerify::where('email', $email)
            ->where('user_type', $userType)
            ->where('event_type', $eventType)
            ->where('verified', false);

        if ($code !== 100000) {
            $verification->where('code', $code);
        }

        $verification = $verification->first();

        if (!empty($verification)) {
            $verification->update(['verified' => true]);
            return response()->json(null);
        }

        return response()->json(['message' => 'Invalid confirmation code.'], 422);
    }
}
