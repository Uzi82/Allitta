<?php

namespace App\Http\Resources\Products\Categories;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductCategoryRecommendationResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'banner_path' => asset($this->banner_path),
            'name' => __('categories')[$this->id],
        ];
    }
}
