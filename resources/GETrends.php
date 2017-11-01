<?php
  include("API/TwitterAPIExchange.php");
  include("API/ConfigTwitterSecret.php");

  //url es el recurso de la API que desaeamos obtener
  $url = 'https://api.twitter.com/1.1/trends/place.json';
  $varget = '?id=1';
  //mendoza 332471
  $requestMethod = 'GET';

  $twitter = new TwitterAPIExchange($settings);
  echo $twitter->setGetfield($varget)
      ->buildOauth($url, $requestMethod)
      ->performRequest();
