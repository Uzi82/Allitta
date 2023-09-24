<?php

namespace App\Services\Searching;

use Illuminate\Support\Facades\DB;

class TextSearchService
{
    public function getTsVector(string $text)
    {
        return DB::selectOne('SELECT to_tsvector(?) AS vector', [$text])->vector;
    }
}
