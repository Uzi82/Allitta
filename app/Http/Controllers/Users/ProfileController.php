<?php

namespace App\Http\Controllers\Users;

use App\Enums\PathEnum;
use App\Http\Controllers\Controller;
use App\Http\Requests\UserPhotoRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class ProfileController extends Controller
{
    public function update(UserPhotoRequest $request): JsonResponse
    {
        $path = $request->file('photo')->store(PathEnum::USER_IMAGES_PROFILE->value);
        (Auth::user())->where('id', Auth::id())->update(['img_path' => $path]);

        return response()->json(['image' => asset($path)]);
    }
}
