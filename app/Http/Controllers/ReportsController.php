<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ReportsController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $spends = DB::table('spends')
            ->whereMonth('created_at', date('m'))
            ->whereYear('created_at', date('Y'))
            ->where('user_id', $user->id)
            ->get();

        return Inertia::render('Reports',
            [
                'spends' => $spends
            ]);
    }
}
