<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductCategoryLimitRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'product_limit' => 'nullable|integer|min:1|max:1000',
            'category_limit' => 'nullable|integer|min:1|max:1000'
        ];
    }
}
