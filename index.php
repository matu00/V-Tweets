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
        <div class="navbar navbar-inverse navbar-fixed-top opaque-navbar">
          <div class="container">
            <div class="navbar-header">
              <li class="tab ">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navMain">
                  <span class="glyphicon glyphicon-chevron-right" style="color:white;"></span>
                </button>
                <a class="dropdown-toggle navbar-brand" data-toggle="dropdown" href="#">M-Experience</a>

                <ul class="dropdown-menu" style="margin-left:80px">
                  <li class="dropdown-submenu">
                    <a class="test" href="#" onclick="contenido(6);" style="color:white;background-color:black;" id="cambio">Change Background</a>
                  </li>
                </ul>
              </li>
            </div>
            <div class="collapse navbar-collapse" id="navMain">
              <ul class="nav navbar-nav pull-right">
                <li><a href="https://github.com/Matu95" target="_blank"><i class="fa fa-github fa-2x" aria-hidden="true"></i><br><b> My GitHub</b></a></li>
              </ul>
            </div>
          </div>
        </div>
        <button type="button" name="button"></button>
        <div align="center" class="tittle"><h1 style="font-family: 'Crimson Text', serif;" id="phrases">Across the Universe</h1></div>
        <h3 style="color: #dedede;font-family: 'Crimson Text', serif;" id="author">The Beatles</h3>

        <p align="center">
            <a href="#" onclick="setInterval('javascript:recargar()',6000);">recargar</a>
        </p>
      </div>
    </div>
    <script type="text/javascript">

      $(document).ready(function() {
          $('#cambio').click(function(){
              var a =  Math.round(Math.random() * (0 - 1) + 0);
              document.getElementById('preloader').style.display = 'block';
              $('#body').css('background-image', 'url(public/img/background-html'+a+'.jpg)');
          });
      });

      function recargar(){
          var a=0;
             /// Invocamos a nuestro script PHP
          $.post("resources/phrases.php",{ phrase: a=1 }, function(data){
            $("#phrases").html(data);
            var a=0;
          });
          $.post("resources/phrases.php",{ phrase: a=2 }, function(data){
            $("#author").html(data);
            var a=0;
          });

      }

    </script>

    <script>
      window.onload = function(){
        var preloader = document.getElementById('preloader');
        preloader.style.visibility = 'hidden';
        preloader.style.opacity = '0';
      }
    </script>
    <script type="text/javascript" src="public/particles-js/particles.js"></script>
    <script type="text/javascript" src="public/particles-js/config.js"></script>
    <script type="text/javascript" src="public/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="public/js/main.js"></script>
  </body>
</html>
