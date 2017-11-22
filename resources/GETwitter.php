<?php
  header('Access-Control-Allow-Origin: *');
  include("API/TwitterAPIExchange.php");
  include("API/ConfigTwitterSecret.php");
  $tag = json_decode($_POST['body']);
  echo $tag;
