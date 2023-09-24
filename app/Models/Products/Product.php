<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function searchByName(Builder $query, string $name): Builder
    {
        $tsQuery = implode(':* & ', explode(' ', trim($name))) . ':*';
        return $query->whereRaw('name_tsvector @@ to_tsquery(?)', $tsQuery);
    }
}
