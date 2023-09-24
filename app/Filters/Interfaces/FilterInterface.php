<?php

namespace App\Filters\Interfaces;

use Illuminate\Database\Eloquent\Builder;

interface FilterInterface
{
    public function __construct(int|string $value);

    public function filter(Builder $query): Builder;
}
