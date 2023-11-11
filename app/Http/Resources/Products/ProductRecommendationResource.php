<?php

namespace App\Http\Resources\Products;

use App\Enums\CurrencyEnum;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductRecommendationResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'logotype_path' => asset($this->logotype_path),
            'currency' => config('currencies')[CurrencyEnum::USD->value],
            'cost' => (float)$this->cost,
            'description' => $this->description
        ];
    }
}
