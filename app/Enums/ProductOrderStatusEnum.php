<?php

namespace App\Enums;

enum ProductOrderStatusEnum: int
{
    case NEW = 1;
    case ON_PROCESS = 2;
    case ON_DELIVERY = 3;
    case DONE = 4;
    case LOSE = 5;
}
