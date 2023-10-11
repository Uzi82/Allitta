<?php

namespace App\Strategies\Users\Interfaces;

interface EmailVerifyStrategyInterface
{
    public function getAccess(string $email, int $userType): bool;
}
