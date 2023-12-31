<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductCategoryRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            (new LimitRequest())->rules(),
            'image' => 'nullable|bool'
        ];
    }
}
