<?php
  include("TwitterAPIExchange.php");
  include("ConfigTwitterSecret.php");

  //url es el recurso de la API que desaeamos obtener
  $url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
  $varget = '?screen_name=Matu_chox';
  $requestMethod = 'GET';

  $twitter = new TwitterAPIExchange($settings);
  echo $twitter->setGetfield($varget)
      ->buildOauth($url, $requestMethod)
      ->performRequest();

?>
