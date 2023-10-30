<?php

namespace App\Http\Requests;

use App\Enums\GenderEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Carbon;
use Illuminate\Validation\Rule;

class UserRegisterRequest extends FormRequest
{
    public function rules(): array
    {
        $currentDate = Carbon::now()->toDateString();
        $date100YearsAgo = Carbon::now()->subYears(100)->toDateString();

        return [
            'first_name' => 'required|string|max:25',
            'last_name' => 'required|string|max:25',
            'full_name' => 'required|string|max:50',
            'email' => 'required|email',
            'password' => 'required|string|min:6|max:100',
            'birthday' => [
                'required',
                'date_format:Y-m-d',
                'before_or_equal:' . $currentDate,
                'after_or_equal:' . $date100YearsAgo,
            ],
            'gender' => ['required', 'integer', Rule::in([GenderEnum::MALE->value, GenderEnum::FEMALE->value])],
            'phone_number' => 'required|regex:/^\d{9,15}$/',
            'street' => 'required|string|max:100',
            'city' => 'required|string|max:25',
            'zip_code' => 'required|string|max:50',
        ];
    }
}
