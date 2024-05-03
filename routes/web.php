<?php

use App\Http\Controllers\AuthenticacionController;
use Illuminate\Auth\Middleware\Authenticate;
use Illuminate\Support\Facades\Route;



    Route::get('/login', [AuthenticacionController::class, 'index'])->name('login');

    Route::get('/home', [AuthenticacionController::class, 'auth'])->name('home.index');
    Route::get('/logout', [AuthenticacionController::class, 'logout'])->name('logout');

