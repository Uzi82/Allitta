<?php

namespace App\Http\Controllers\SPA;

use App\Http\Controllers\Controller;
use Illuminate\View\View;

class SPAController extends Controller
{
    public function index(): View
    {
        $manifestPath = public_path('/build/asset-manifest.json');

        if (file_exists($manifestPath)) {
            return view('main', ['jsFile' => 'build' . json_decode(file_get_contents($manifestPath), true)['files']['main.js']]);
        }

        return view('main', ['jsFile' => 'build/static/js/fallback.js']);
    }
}
