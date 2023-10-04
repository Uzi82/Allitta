<?php

namespace App\Http\Requests;

use App\Enums\UserTypesEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EmailVerifyCheckRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'user_type' => ['required', 'integer', Rule::in([UserTypesEnum::CUSTOMER->value, UserTypesEnum::MERCHANT->value])],
            'email' => 'required|email',
            'code' => 'required|integer|min:100000|max:999999'
        ];
    }
}
