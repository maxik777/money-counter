<?php

namespace App\Http\Controllers;


use App\Models\Spends;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;

    public function index()
    {
        $user = Auth::user();
        $spends = DB::table('spends')
            ->whereMonth('created_at', date('m'))
            ->whereYear('created_at', date('Y'))
            ->where('user_id', $user->id)
            ->get()
            ->sum('price');

        return Inertia::render('Dashboard',
        [
            'count' => number_format($spends, 2)
        ]);
    }

    public function saveSpends(Request $request)
    {
        $user = Auth::user();
        $name = $request->input('name');
        $price = $request->input('price');
        $spends = new Spends();
        $spends->user_id = $user->id;
        $spends->name = $name;
        $spends->price = $price;

        $result = $spends->save();

        if ($result){
            return response()->json([
                'count'=>5,
                'status' =>200
            ]);
        }
    }
}
