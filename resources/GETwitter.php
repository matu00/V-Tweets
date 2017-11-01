<?php
  include("API/TwitterAPIExchange.php");
  include("API/ConfigTwitterSecret.php");
  $tag = $_POST['tag'];

  //url es el recurso de la API que desaeamos obtener
  $url = 'https://api.twitter.com/1.1/search/tweets.json';
  $varget = '?q='.$tag.'';
  //$url = 'https://api.twitter.com/1.1/trends/place.json';
  //$varget = '?id=332471';
  $requestMethod = 'GET';

  $twitter = new TwitterAPIExchange($settings);
  echo $twitter->setGetfield($varget)
      ->buildOauth($url, $requestMethod)
      ->performRequest();
