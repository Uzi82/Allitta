<?php

namespace App\Filters\Products;

use App\Filters\Interfaces\FilterInterface;
use Illuminate\Database\Eloquent\Builder;

class ProductSubcategoryFilter implements FilterInterface
{
    private array $value;

    public function __construct(array $value)
    {
        $this->value = $value;
    }

    public function filter(Builder $query): Builder
    {
        if (!empty($this->value)) {
            return $query->where('subcategory_id', $this->value);
        }

        return $query;
    }
}
