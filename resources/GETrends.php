<?php
header('Access-Control-Allow-Origin: *');
include("API/TwitterAPIExchange.php");
include("API/ConfigTwitterSecret.php");
$_POST = json_decode(file_get_contents('php://input'), true);
$reg = $_POST['region'];
//url es el recurso de la API que desaeamos obtener
$url = 'https://api.twitter.com/1.1/trends/place.json';
$varget = '?id=' . $reg;
//mendoza 332471
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
echo $twitter->setGetfield($varget)
    ->buildOauth($url, $requestMethod)
    ->performRequest();