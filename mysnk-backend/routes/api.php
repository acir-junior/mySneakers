<?php

use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::post("register", [AuthController::class, "userRegister"]);
Route::post("login", [AuthController::class, "authLogin"]);

Route::group([
    "middleware" => ["auth:api"]
], function() {
    Route::get("home", [AuthController::class, "showHome"]);
    Route::get("refresh-token", [AuthController::class, "refreshUserToken"]);
    Route::get("logout", [AuthController::class, "logout"]);
});
