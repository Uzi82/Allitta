<?php

namespace App\Enums;

enum ProductCategoryEnum: int
{
    case TECH = 1;
    case ELECTRONICS = 2;
    case HEALTH_AND_BEAUTY = 3;
    case FASHION = 4;
    case FURNITURE = 5;
    case SPORTS = 6;

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
