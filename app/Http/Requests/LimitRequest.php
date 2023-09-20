<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LimitRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'limit' => 'nullable|integer|min:1|max:1000'
        ];
    }
}
