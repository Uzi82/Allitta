<?php

use App\Enums\ComparisonEnum;

return [
    ComparisonEnum::EQUAL->value => '=',
    ComparisonEnum::NOT_EQUAL->value => '!=',
    ComparisonEnum::GREATER_THAN_OR_EQUAL->value => '>=',
    ComparisonEnum::LESS_THAN_OR_EQUAL->value => '<=',
];
