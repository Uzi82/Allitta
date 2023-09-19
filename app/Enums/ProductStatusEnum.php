<?php

namespace App\Enums;

enum ProductStatusEnum: int
{
    case LIVE = 1;
    case UNAVAILABLE = 2;
    case NO_STOCK = 3;
}
