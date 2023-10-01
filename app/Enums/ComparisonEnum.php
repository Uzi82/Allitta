<?php

namespace App\Enums;

enum ComparisonEnum: int
{
    case EQUAL = 1;
    case NOT_EQUAL = 2;
    case GREATER_THAN_OR_EQUAL = 3;
    case LESS_THAN_OR_EQUAL = 4;

    public static function values(): array
    {
        return array_column(self::cases(), 'value');
    }
}
