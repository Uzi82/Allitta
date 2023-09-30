<?php

namespace App\Enums;

enum ProductSubcategoryEnum: int
{
    case LAPTOPS = 1;
    case DESKTOPS = 2;
    case SMARTPHONES = 3;
    case HEADPHONES = 4;
    case FACE_MASKS = 5;
    case COSMETICS = 6;
    case MENS_CLOTHING = 7;
    case WOMENS_CLOTHING = 8;
    case TABLES = 9;
    case WARDROBES = 10;
    case DUMBBELLS = 11;
    case JUMP_ROPES = 12;

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
