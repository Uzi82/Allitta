<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRestoreRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => 'required|email',
            'password' => 'required|string|min:6|max:100',
        ];
    }
}
