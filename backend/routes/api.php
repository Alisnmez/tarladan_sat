<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\TestController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/ping',[TestController::class,'pingo']);

Route ::get('/hello',[TestController::class,'Hello']);

Route ::post('contact',[TestController::class,'contact']);

Route::get('/contacts', [TestController::class, 'contacts']);