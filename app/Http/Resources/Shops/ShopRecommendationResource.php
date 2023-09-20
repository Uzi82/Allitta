<?php

namespace App\Http\Resources\Shops;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShopRecommendationResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'logotype_path' => asset($this->logotype_path),
            'products_count' => $this->products_count,
        ];
    }
}
