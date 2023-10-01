<?php

use App\Http\Controllers\Products\ProductCategoriesController;
use App\Http\Controllers\Products\ProductSearchController;
use App\Http\Controllers\Products\ProductSubcategoriesController;
use App\Http\Controllers\Recommendations\ProductsCategoriesRecommendationsController;
use App\Http\Controllers\Recommendations\ProductsRecommendationsController;
use App\Http\Controllers\Recommendations\ShopsRecommendationsController;
use App\Http\Controllers\Shops\ShopsController;
use App\Http\Controllers\Users\UserEmailDistributionController;
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

    Route::get('search', [ProductSearchController::class, 'search']);

    Route::prefix('recommendations')->group(function () {
        Route::get('best', [ProductsRecommendationsController::class, 'bestProducts']);
        Route::get('personal', [ProductsRecommendationsController::class, 'personal']);
    });

    Route::get('categories', [ProductCategoriesController::class, 'getProductCategories']);
    Route::get('subcategories', [ProductSubcategoriesController::class, 'getProductSubcategories']);
    Route::get('subcategories/category/{id}', [ProductSubcategoriesController::class, 'getProductSubcategoriesByCategory']);

    Route::get('categories/recommendations/best', [ProductsCategoriesRecommendationsController::class, 'bestCategories']);
});

Route::prefix('shops')->group(function () {
    Route::prefix('recommendations')->group(function () {
        Route::get('best', [ShopsRecommendationsController::class, 'bestShops']);
    });

    Route::get('{id}', [ShopsController::class, 'show']);
});

Route::prefix('users')->group(function () {
    Route::prefix('email/distribution')->group(function () {
        Route::post('subscribe', [UserEmailDistributionController::class, 'store']);
    });
});

Route::get('/healthcheck', function () {
    return response('OK');
});
