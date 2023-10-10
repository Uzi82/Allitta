<?php

namespace App\Strategies\Users;

class EmailVerifyDefaultStrategyImpl implements Interfaces\EmailVerifyStrategyInterface
{
    public function getAccess(string $email, int $userType): bool
    {
        return true;
    }
}
