<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function scopeSearchByName(Builder $query, string $name): Builder
    {
        if ($name) {
            $tsQuery = implode(':* & ', explode(' ', trim($name))) . ':*';
            $query->whereRaw('name_tsvector @@ to_tsquery(?)', $tsQuery);
        }

        return $query;
    }
}
