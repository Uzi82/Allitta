<?php

namespace App\Http\Resources\Products\Categories;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductCategoryImageResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'logotype_path' => asset($this->logotype_path),
            'name' => __('categories')[$this->id],
        ];
    }
}
