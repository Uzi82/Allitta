<?php

namespace App\Models\Users;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;

class UserEmailVerify extends Model
{
    use HasFactory;

    protected $fillable = ['email', 'user_type', 'code', 'verified', 'event_type'];

    public function checkEmailVerified(string $email, int $userType, int $eventType): bool
    {
        return UserEmailVerify::where('email', $email)
            ->where('user_type', $userType)
            ->where('verified', true)
            ->where('event_type', $eventType)
            ->where('created_at', '>=', Carbon::now()->subMinutes())
            ->exists();
    }
}
