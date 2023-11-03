<?php

namespace App\Models\Users;

use App\Models\Shops\Shop;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class MerchantUser extends User
{
    use HasFactory;

    protected $fillable = [
        'first_name',
        'last_name',
        'full_name',
        'email',
        'password',
        'birthday',
        'gender',
        'phone_number',
        'street',
        'city',
        'zip_code'
    ];

    public function hasShop(int $shopId, int $userId): bool
    {
        return Shop::where('id', $shopId)->where('user_id', $userId)->exists();
    }
}
