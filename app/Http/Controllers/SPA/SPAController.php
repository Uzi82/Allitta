<?php

namespace App\Http\Controllers\SPA;

use App\Http\Controllers\Controller;

class SPAController extends Controller
{
    public function index()
    {
        return view('main');
    }
}
