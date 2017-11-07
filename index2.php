<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Bootstrap Testimonial Slider - Free Template</title>

  <!-- CSS -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,100,300,500">
  <link rel="stylesheet" href="public/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="public/font-awesome-4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="public/css/style.css">
  <link rel="stylesheet" href="public/css/loader.css">

  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
            <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
        <![endif]-->

</head>

<body>
  <div id="preloader">
    <div class="sk-folding-cube">
      <div class="sk-cube1 sk-cube"></div>
      <div class="sk-cube2 sk-cube"></div>
      <div class="sk-cube4 sk-cube"></div>
      <div class="sk-cube3 sk-cube"></div>
    </div>
  </div>
  <!-- Testimonials -->
  <div class="testimonials-container section-container section-container-image-bg">
    <div class="container">
      <div class="row">
        <div class="col-sm-12 testimonials section-description">
          <h2>V-Tweets</h2>
          <div class="divider-1">
            <div class="line"></div>
          </div>
          <p class="medium-paragraph">Bienvenido a V-Tweets</p>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-10 col-sm-offset-1 testimonial-list">
          <div role="tabpanel">
            <!-- Tab panes -->
            <div class="tab-content">
              <div role="tabpanel" class="tab-pane fade in active" id="tab1">
                <div class="testimonial-image">
                  <img src="public/img/testimonials/1.jpg" alt="t1" id="circleimg">
                </div>
                <div class="testimonial-text">
                  <p id="phrases">
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et. Lorem ipsum dolor sit amet, consectetur..."<br>
                    <a href="#">Lorem Ipsum, dolor.co.uk</a>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-sm-5 footer-copyright">
          <h4>&copy; V-Tweets</h4>
        </div>
        <div class="col-sm-7 footer-social">

            <div class="dropdown dropup" >
              <a href="https://github.com/Matu95" target="_blank"><i class="fa fa-github"></i></a>

              <button class="btn btn-primary dropdown-toggle dropup" type="button" data-toggle="dropdown" onclick="trendstwitter()">
                <i id="spin" class="fa fa-twitter" aria-hidden="true"></i>
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu dropup" style="z-index : 99999;margin-left:75%;" id="trends">
              </ul>
            </div>

        </div>
      </div>
    </div>
  </footer>
  <!-- Javascript -->
  <script type="text/javascript" src="public/js/jquery-1.11.1.min.js"></script>
  <script src="public/js/jquery.backstretch.min.js"></script>
  <script src="public/bootstrap/js/bootstrap.min.js"></script>
  <script type="text/javascript" src="public/js/myscript.js"></script>


</body>

</html>
