<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

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
//            'page' => 'required|integer',
//            'per_page' => 'integer|default:10',
            'name' => 'string',
//            'category' => 'int',
//            'sub_category' => 'int'
        ];
    }
}
