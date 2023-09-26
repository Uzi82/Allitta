<?php

namespace App\Http\Controllers\Users;

use App\Http\Controllers\Controller;
use App\Http\Requests\EmailSubscriptionRequest;
use App\Models\Users\EmailSubscription;
use Illuminate\Http\JsonResponse;

class UserEmailDistributionController extends Controller
{
    public function store(EmailSubscriptionRequest $request): JsonResponse
    {
        EmailSubscription::create([
            'email' => $request->input('email')
        ]);

        return response()->json(null, 201);
    }
}
