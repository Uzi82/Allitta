<?php

namespace App\Http\Resources\Users;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Carbon;

class MerchantShopDashboardNewOrdersResource extends JsonResource
{
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'customer_name' => $this->full_name,
            'ordered_date' => Carbon::parse($this->created_at)->format('Y/m/d'),
            'amount' => (float)$this->amount,
            'currency' => config('currencies')[$this->currency],
            'status' => $this->status,
        ];
    }
}
