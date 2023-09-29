<?php

namespace App\Models\Products;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ProductSubcategory extends Model
{
    use HasFactory;

    public function category(): BelongsTo
    {
        return $this->belongsTo(ProductCategory::class);
    }
}
