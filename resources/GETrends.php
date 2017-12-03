<?php
  header('Access-Control-Allow-Origin: *');
  include("API/TwitterAPIExchange.php");
  include("API/ConfigTwitterSecret.php");
  $_POST = json_decode(file_get_contents('php://input'), true);
$hola='asdasd';
  var_dump($hola);
