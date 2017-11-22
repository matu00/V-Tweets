<?php
  header('Access-Control-Allow-Origin: *');
  include("API/TwitterAPIExchange.php");
  include("API/ConfigTwitterSecret.php");
  $_POST = json_decode(file_get_contents('php://input'), true);
  var_dump($_POST['firstName']);
