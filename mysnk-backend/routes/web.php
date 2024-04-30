<?php

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    $l = DB::connection('mongodb')->getMongoClient()->listDatabases();
    dd($l);
    return view('welcome');
});
