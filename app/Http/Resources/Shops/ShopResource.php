<?php

namespace App\Http\Resources\Shops;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShopResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'logotype_path' => asset($this->logotype_path),
            'banner_path' => asset($this->banner_path),
            'description' => $this->description,
            'rating' => round(($this->rating ?? 0) * 2) / 2,
        ];
    }
}
