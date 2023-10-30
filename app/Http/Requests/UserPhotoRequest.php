<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserPhotoRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'photo' => 'required|image|max:5120',
        ];
    }
}
