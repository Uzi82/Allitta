<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8"/>
    <link rel="icon" href="favicon.ico"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <meta name="theme-color" content="#000000"/>
    <meta
        name="description"
        content="Web shop for selling everything"
    />
    <link rel="apple-touch-icon" href="logo192.png"/>
    <link rel="manifest" href="manifest.json"/>
    @foreach ($files['css'] as $file)
        <link rel="stylesheet" href="{{ asset($file) }}"/>
    @endforeach
    @foreach ($files['fonts'] as $file)
        <link rel="preload" href="{{ asset($file) }}" as="font" type="font/ttf" crossorigin="anonymous">
    @endforeach
    <title>Allitta</title>
</head>
<body>
<noscript>You need to enable JavaScript to run this app.</noscript>
<div id="root"></div>
@foreach ($files['scripts'] as $file)
    <script src="{{ asset($file) }}"></script>
@endforeach
</body>
</html>
