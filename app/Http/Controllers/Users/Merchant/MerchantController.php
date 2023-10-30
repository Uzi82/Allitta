<?php

namespace App\Http\Controllers\Users\Merchant;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;

class MerchantController extends Controller
{
    public function show(): JsonResponse
    {
        $user = Auth::user();
        return response()->json(['name' => $user->first_name, 'img_path' => asset($user->img_path)]);
    }
}
