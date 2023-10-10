<?php

namespace App\Models\Users;

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
}
