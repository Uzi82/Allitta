<?php

use App\Http\Controllers\Products\ProductCategoriesController;
use App\Http\Controllers\Recommendations\ProductsCategoriesRecommendationsController;
use App\Http\Controllers\Recommendations\ProductsRecommendationsController;
use App\Http\Controllers\Recommendations\ShopsRecommendationsController;
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

//    Route::get('search', [ProductSearchController::class, 'search']);

    Route::prefix('recommendations')->group(function () {
        Route::get('best', [ProductsRecommendationsController::class, 'bestProducts']);
        Route::get('personal', [ProductsRecommendationsController::class, 'personal']);
    });

    Route::get('categories', [ProductCategoriesController::class, 'index']);
    Route::get('categories/recommendations/best', [ProductsCategoriesRecommendationsController::class, 'bestCategories']);
});

Route::prefix('shops')->group(function () {
    Route::prefix('recommendations')->group(function () {
        Route::get('best', [ShopsRecommendationsController::class, 'bestShops']);
    });
});

Route::get('/healthcheck', function () {
    return response('OK');
});
