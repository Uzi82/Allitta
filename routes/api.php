<?php

use App\Http\Controllers\ProductCategories;
use App\Http\Controllers\RecommendationController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('products')->group(function () {
    Route::get('categories', [ProductCategories::class, 'index']);

    Route::prefix('recommendations')->group(function () {
        Route::get('best-products', [RecommendationController::class, 'bestProducts']);
        Route::get('best-shops', [RecommendationController::class, 'bestShops']);
        Route::get('personal', [RecommendationController::class, 'personal']);
    });
});

Route::get('/healthcheck', function () {
    return response('OK');
});
