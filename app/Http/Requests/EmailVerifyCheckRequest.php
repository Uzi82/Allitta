<?php

namespace App\Http\Requests;

use App\Enums\EmailVerifyEventEnum;
use App\Enums\UserTypesEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class EmailVerifyCheckRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'email' => 'required|email',
            'code' => 'required|integer|min:100000|max:999999',
            'user_type' => ['required', 'integer', Rule::in([UserTypesEnum::CUSTOMER->value, UserTypesEnum::MERCHANT->value])],
            'event_type' => ['required', 'integer', Rule::in([EmailVerifyEventEnum::REGISTRATION->value, EmailVerifyEventEnum::PASSWORD_RESTORE->value])]
        ];
    }
}
