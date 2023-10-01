<?php

namespace App\Filters\Products;

use App\Enums\ProductOrderByEnum;
use App\Enums\ProductOrderStatusEnum;
use App\Filters\Interfaces\FilterInterface;
use App\Models\Products\Product;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;

class ProductOrderByFilter implements FilterInterface
{
    private int $orderByEnum;

    public function __construct(int $orderByEnum)
    {
        $this->orderByEnum = $orderByEnum;
    }

    public function filter(Builder $query): Builder
    {
        if (in_array($this->orderByEnum, ProductOrderByEnum::values())) {

            if ($this->orderByEnum === ProductOrderByEnum::COST_LOWER_TO_HIGHER->value) {
                $query->orderBy('cost', 'ASC');
            }

            if ($this->orderByEnum === ProductOrderByEnum::COST_HIGHER_TO_LOWER->value) {
                $query->orderBy('cost', 'DESC');
            }

            if ($this->orderByEnum === ProductOrderByEnum::POPULARITY->value) {

                $subquery = Product::select('products.id as product_id', DB::raw('COUNT(*) as product_orders'))
                    ->rightJoin('product_order_items', 'products.id', '=', 'product_order_items.product_id')
                    ->leftJoin('product_orders', 'product_orders.id', '=', 'product_order_items.order_id')
                    ->where('product_orders.status', ProductOrderStatusEnum::DONE)
                    ->groupBy('products.id');

                $query->leftJoinSub($subquery, 'subquery_alias', function ($join) {
                    $join->on('products.id', '=', 'subquery_alias.product_id');
                });

                $query->orderByRaw('subquery_alias.product_orders IS NULL, subquery_alias.product_orders DESC');
            }
        }

        return $query;
    }
}
