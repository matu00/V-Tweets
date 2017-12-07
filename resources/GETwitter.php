<?php
  header('Access-Control-Allow-Origin: *');
  include("API/TwitterAPIExchange.php");
  include("API/ConfigTwitterSecret.php");
  $_POST = json_decode(file_get_contents('php://input'), true);
  //url es el recurso de la API que desaeamos obtener
  $url = 'https://api.twitter.com/1.1/search/tweets.json';
  $varget = '?q='.$_POST['tag'].'';
  $requestMethod = 'GET';
  $twitter = new TwitterAPIExchange($settings);
  echo $twitter->setGetfield($varget)
    ->buildOauth($url, $requestMethod)
    ->performRequest();

