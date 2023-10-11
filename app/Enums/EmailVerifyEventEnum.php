<?php

namespace App\Enums;

enum EmailVerifyEventEnum: int
{
    case REGISTRATION = 1;
    case PASSWORD_RESTORE = 2;
}
