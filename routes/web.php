<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SPA\SPAController;

Route::get('/{any}', [SPAController::class, 'index'])->where('any', '.*');
