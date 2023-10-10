<?php

namespace App\Strategies\Users;

use App\Enums\UserTypesEnum;
use App\Models\Users\CustomerUser;
use App\Models\Users\MerchantUser;

class EmailVerifyRegistrationStrategyImpl implements Interfaces\EmailVerifyStrategyInterface
{
    public function getAccess(string $email, int $userType): bool
    {
        $model = new CustomerUser();

        if ($userType === UserTypesEnum::MERCHANT->value) {
            $model = new MerchantUser();
        }

        return !$model::where('email', $email)->exists();
    }
}
