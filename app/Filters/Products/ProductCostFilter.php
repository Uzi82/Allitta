<?php

namespace App\Filters\Products;

use App\Enums\ComparisonEnum;
use App\Filters\Interfaces\FilterInterface;
use Illuminate\Database\Eloquent\Builder;

class ProductCostFilter implements FilterInterface
{
    private int $cost;
    private int $comparisonEnum;

    public function __construct(int $cost, int $comparisonEnum)
    {
        $this->cost = $cost;
        $this->comparisonEnum = $comparisonEnum;
    }

    public function filter(Builder $query): Builder
    {
        if ($this->cost !== 0 && in_array($this->comparisonEnum, ComparisonEnum::values())) {
            return $query->where('cost', config('app.comparisons')[$this->comparisonEnum], $this->cost);
        }

        return $query;
    }
}
