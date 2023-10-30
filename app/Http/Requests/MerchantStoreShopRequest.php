<?php

namespace App\Http\Requests;

use App\Enums\ShopCategoryEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class MerchantStoreShopRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'name' => 'required|string|min:3|max:100',
            'description' => 'required|string|max:1000',
            'category_id' => ['required', 'integer', Rule::in(ShopCategoryEnum::values())],
            'reg_number' => 'nullable|string|max:20',
            'email' => 'required|email',
            'phone_number' => 'required|regex:/^\d{9,15}$/',
            'street' => 'required|string|max:100',
            'city' => 'required|string|max:25',
            'zip_code' => 'required|string|max:50',
        ];
    }
}
