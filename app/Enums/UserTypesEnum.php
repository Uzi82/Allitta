<?php

namespace App\Enums;

enum UserTypesEnum: int
{
    case ADMIN = 1;
    case CUSTOMER = 2;
    case MERCHANT = 3;

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
