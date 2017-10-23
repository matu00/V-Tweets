<?php
  include("API/TwitterAPIExchange.php");
  include("API/ConfigTwitterSecret.php");

  $url="https://api.twitter.com/1.1/statuses/update.json";

  $postdata= array(
    'status' => "hi world"
  );

  $requestMethod = 'POST';

  $twitter = new TwitterAPIExchange($settings);

  echo $twitter ->setPostfields($postdata)
                ->buildOauth($url, $requestMethod)
                ->performRequest();
?>
