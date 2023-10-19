<?php

namespace App\Http\Requests;

use App\Enums\ComparisonEnum;
use App\Enums\ProductCategoryEnum;
use App\Enums\ProductOrderByEnum;
use App\Enums\ProductSubcategoryEnum;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ProductSearchRequest extends FormRequest
{
    public function rules(): array
    {
        return [
            'page' => 'required|integer',
            'per_page' => 'required|integer',

            'name' => 'string',
            'cost' => 'integer|min:0',
            'comparison' => ['integer', Rule::in(ComparisonEnum::values()), 'required_with:cost'],
            'order_by' => ['required:integer', Rule::in(ProductOrderByEnum::values())],

            'category' => 'array',
            'subcategory' => 'array',
            'category.*' => ['integer', Rule::in(ProductCategoryEnum::values())],
            'subcategory.*' => ['integer', Rule::in(ProductSubcategoryEnum::values())],
        ];
    }

    public function messages(): array
    {
        return [
            'category.*.in' => 'The selected category is invalid.',
            'subcategory.*.in' => 'The selected subcategory is invalid.',
            'category.*.integer' => 'The subcategory field must be an integer.',
            'subcategory.*.integer' => 'The subcategory field must be an integer.',
        ];
    }
}
