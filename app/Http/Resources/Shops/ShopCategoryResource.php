<?php

namespace App\Http\Resources\Shops;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ShopCategoryResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => __('shop_categories')[$this->id],
        ];
    }
}
