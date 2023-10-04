<?php

namespace App\Http\Requests;

use App\Enums\UserTypesEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EmailVerifyStoreRequest extends FormRequest
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
        ];
    }
}
