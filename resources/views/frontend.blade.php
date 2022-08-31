<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Larave Blog</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

        <link rel="stylesheet" href="{{asset('css/app.css')}}">
        <script src="{{asset('js/frontendAccessPoint.js')}}" defer></script>
    </head>
    <body>
        <div id="app">
        </div>
    </body>
</html>
