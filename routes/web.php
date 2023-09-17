<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any}', function () {
    return redirect('http://localhost');
})->where('any', '.*');
