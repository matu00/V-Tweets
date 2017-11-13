<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>M-Experience</title>
    <script type="text/javascript" src="public/js/jquery-1.11.1.min.js"></script>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css">
    <link href="https://fonts.googleapis.com/css?family=Crimson+Text" rel="stylesheet">
    <link rel="stylesheet" href="public/font-awesome-4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="public/css/loader.css">
    <link rel="stylesheet" href="public/css/main.css">
  </head>

  <body id="body">
    <div id="loader"></div>
    <div id="preloader">
      <div class="sk-folding-cube">
        <div class="sk-cube1 sk-cube"></div>
        <div class="sk-cube2 sk-cube"></div>
        <div class="sk-cube4 sk-cube"></div>
        <div class="sk-cube3 sk-cube"></div>
      </div>
    </div>

    <div id="particles-js">
      <div id="intro">
        <?php
          include("views/includes/nav-bar.html");
          include("views/OtherViews/ChangeTextColor.html");
          include("views/OtherViews/config.html"); 
        ?>

        <div align="center" class="tittle container"><h1 class="text" style="font-family: 'Crimson Text', serif;" id="phrases">Across the Universe</h1></div>
        <h3 class="text" style="color: #dedede;font-family: 'Crimson Text', serif;" id="author">The Beatles</h3>
        <img class="img-circle" id="circleimg">
        <br><br>
        <p align="center">
            <a href="#" onclick="stop()">detener</a>
        </p>
        <div style="margin-top:43%;position: fixed; top: 0; margin-left:80%">
        <div class="col-md-6"></div>
        <div class="col-md-6">
          <div class="dropdown dropup" >
            <button class="btn btn-primary dropdown-toggle dropup" type="button" data-toggle="dropdown" onclick="trendstwitter()">
              <i id="spin" class="fa fa-twitter" aria-hidden="true"></i> Tendencias
              <span class="caret"></span>
            </button>
            <ul class="dropdown-menu dropup" style="z-index : 99999;margin-left:-50px;" id="trends">
            </ul>
          </div>
        </div>
        </div>
      </div>
    </div>

    <script>
      window.onload = function(){
        var preloader = document.getElementById('preloader');
        preloader.style.visibility = 'hidden';
        preloader.style.opacity = '0';
      }
    </script>

    <script type="text/javascript" src="public/js/myscript.js"></script>
    <script type="text/javascript" src="public/particles-js/particles.js"></script>
    <script type="text/javascript" src="public/particles-js/config.js"></script>
    <script type="text/javascript" src="public/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="public/js/main.js"></script>
  </body>
</html>
