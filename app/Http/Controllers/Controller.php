<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Validator;

class Controller extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;

    public function getId(Request $request, string $parameter = 'id'): int|JsonResponse
    {
        $id = $request->route($parameter);

        $validator = Validator::make(['id' => $id], [
            'id' => ['required', 'integer'],
        ]);

        if ($validator->fails()) {
            response()->json(['errors' => $validator->errors()], 422)->send();
            abort(422);
        }

        return $id;
    }
}
