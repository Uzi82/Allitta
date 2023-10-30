<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class MerchantShopImageRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'shop_id' => 'required|integer|exists:shops,id',
            'photo' => 'required|image|max:5120',
        ];
    }
}
