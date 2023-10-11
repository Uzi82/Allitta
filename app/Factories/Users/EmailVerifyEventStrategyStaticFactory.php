<?php

namespace App\Factories\Users;

use App\Enums\EmailVerifyEventEnum;
use App\Strategies\Users\EmailVerifyDefaultStrategyImpl;
use App\Strategies\Users\EmailVerifyPasswordRestoreStrategyImpl;
use App\Strategies\Users\EmailVerifyRegistrationStrategyImpl;
use App\Strategies\Users\Interfaces\EmailVerifyStrategyInterface;

class EmailVerifyEventStrategyStaticFactory
{
    public static function getStrategyByEventType(int $eventType): EmailVerifyStrategyInterface
    {
        return match ($eventType) {
            EmailVerifyEventEnum::REGISTRATION->value => new EmailVerifyRegistrationStrategyImpl(),
            EmailVerifyEventEnum::PASSWORD_RESTORE->value => new EmailVerifyPasswordRestoreStrategyImpl(),
            default => new EmailVerifyDefaultStrategyImpl(),
        };
    }
}
