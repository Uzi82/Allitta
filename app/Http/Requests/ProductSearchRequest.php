<?php

namespace App\Http\Requests;

use App\Enums\ProductCategoryEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductSearchRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            (new LimitRequest())->rules(),
            'page' => 'required|integer',
            'per_page' => 'required|integer',

            'name' => 'string',

            'category' => 'array',
            'sub_category' => 'array',
            'category.*' => ['nullable', 'integer', Rule::in(ProductCategoryEnum::values())],
            'sub_category.*' => ['nullable', 'integer', Rule::in(ProductCategoryEnum::values())],
        ];
    }
}
