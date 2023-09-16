<?php

namespace App\Http\Controllers\SPA;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\View\View;

class SPAController extends Controller
{
    public function index(): View
    {
        $manifestPath = public_path('build/asset-manifest.json');

        if (File::exists($manifestPath)) {

            $files = $this->getManifestFiles($manifestPath);

            $data = [
                'js' => $this->getAndRemoveMainJs($files),
                'styles' => $files,
            ];

            return view('main', ['files' => $data]);
        }

        return view('main', ['files' => ['main.js' => 'build/static/js/fallback.js']]);
    }

    protected function getManifestFiles(string $manifestPath): array
    {
        $files = json_decode(File::get($manifestPath), true)['files'];

        foreach ($files as $key => $file) {
            $files[$key] = 'build' . $file;

            if (str_ends_with($file, '.map')) {
                unset($files[$key]);
            }
        }

        return $files;
    }

    protected function getAndRemoveMainJs(array &$files): string
    {
        if (isset($files['main.js'])) {
            $mainJs = $files['main.js'];
            unset($files['main.js']);
            return $mainJs;
        }

        return '';
    }
}
