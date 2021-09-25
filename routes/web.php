<?php

use App\Http\Controllers\ReportsController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Controller;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/dashboard');
});
Route::post('/save-spends', [Controller::class, 'saveSpends'])
    ->middleware(['auth', 'verified'])->name('save-spends');

Route::get('/dashboard', [Controller::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/reports', [ReportsController::class, 'index'])->middleware(['auth', 'verified'])->name('reports');

require __DIR__.'/auth.php';
