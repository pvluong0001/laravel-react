<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel</title>
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <style>
            .menu_item.active {
                background: #c2c2c2;
            }
        </style>
    </head>
    <body>
        <div id="root"></div>

        <script src="{{asset('js/app.js')}}"></script>
    </body>
</html>
