<?php

namespace App\Services\Filters;

use App\Filters\Interfaces\FilterInterface;
use Illuminate\Database\Eloquent\Builder;

class FiltersService
{
    private array $filters = [];

    public function addFilter(FilterInterface $filter): void
    {
        $this->filters[] = $filter;
    }

    public function applyFilters(Builder $query): Builder
    {
        foreach ($this->filters as $filter) {
            $query = $filter->filter($query);
        }

        return $query;
    }
}
