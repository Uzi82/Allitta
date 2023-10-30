<?php

namespace App\Enums;

enum ShopCategoryEnum: int
{
    case TECH_SHOP = 1;
    case ELECTRONICS_SHOP = 2;
    case HEALTH_AND_BEAUTY_SHOP = 3;
    case FASHION_SHOP = 4;
    case FURNITURE_SHOP = 5;
    case SPORTS_SHOP = 6;

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
