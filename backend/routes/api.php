<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\admin\ServiceController;
use App\Http\Controllers\admin\DashboardController;

//Route::post('authenticate',[AuthController::class,'authenticate']);
Route::post('/Authenticate', [AuthController::class, 'authenticate']);


//Route::get('/user', function (Request $request) {
//    return $request->user();
//})->middleware('auth:sanctum');


//Route::middleware(['middleware' => ['auth.sanctum']], function(){
Route::middleware(['auth:sanctum'])->group(function (){
    //protected routes
    Route::get('dashboard', [DashboardController::class, 'index']);

    Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
    Route::post('/login', [AuthController::class, 'login']);

    
    Route::get('logout',[AuthController::class,'logout']);
    Route::post('services',[ServiceController::class,'store']);

});
