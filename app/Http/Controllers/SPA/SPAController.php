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

            $filePaths = $this->getManifestFiles($manifestPath);

            $data = [
                'scripts' => $this->getFilePathsByExtension($filePaths, '.js'),
                'css' => $this->getFilePathsByExtension($filePaths, '.css'),
                'fonts' => $this->getFilePathsByExtension($filePaths, '.ttf')
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

    protected function getFilePathsByExtension(array $filePaths, string $extension): array
    {
        $result = [];

        foreach ($filePaths as $filePath) {
            if (str_ends_with($filePath, $extension)) {
                $result[] = $filePath;
            }
        }

        return $result;
    }
}
