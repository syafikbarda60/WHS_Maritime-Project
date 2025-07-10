<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controller\AuthController;
use App\Http\Controller\DashboardController;

Route::post('authenticate',[AuthController::class,'authenticate']);


//Route::get('/user', function (Request $request) {
//    return $request->user();
//})->middleware('auth:sanctum');


Route::prefix(['middleware' => ['auth.sanctum']], function(){
    //protected routes

    Routes::get('dashboard', [DashboardController::class, 'index']);
    Route::get('logout',[AuthController::class,'logout']);
    
});
