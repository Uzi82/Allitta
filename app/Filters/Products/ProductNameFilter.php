<?php

namespace App\Filters\Products;

use App\Filters\Interfaces\FilterInterface;
use App\Models\Products\Product;
use Illuminate\Database\Eloquent\Builder;

class ProductNameFilter implements FilterInterface
{
    private string $value;

    public function __construct(string $value)
    {
        $this->value = $value;
    }

    public function filter(Builder $query): Builder
    {
        if (!empty($this->value)) {
            return (new Product())->searchByName($query, $this->value);
        }

        return $query;
    }
}
