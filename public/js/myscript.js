$('#cambio').click(function() {
  var num = Math.round(Math.random() * (4 - 1) + 1);
  $('#body').css('background-image', 'url(public/img/background-html' + num + '.jpg)');
  $('#loader').html('<div id="preloader"><div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div></div>');
  setTimeout(function() {
    hide()
  }, 8000);

  function hide() {
    loader.style.visibility = 'hidden';
    $('#loader').html('');

  }
  //document.getElementById('preloader').style.display = 'block';
  //$('#body').css('background-image', 'url(public/img/background-html1.jpg)');
});

function recargar() {
  var a = 0;
  /// Invocamos a nuestro script PHP
  $.post("resources/phrases.php", {
    phrase: a = 1
  }, function(data) {
    $("#phrases").html(data);
    var a = 0;
  });
  $.post("resources/phrases.php", {
    phrase: a = 2
  }, function(data) {
    $("#author").html(data);
    var a = 0;
  });

}

function twitter() {
  var tag = $("#tag").val();
  /// Invocamos a nuestro script PHP
  $.post("resources/GETwitter.php",{tag}, function(data) {
    var res = JSON.parse(data);
    $("#phrases").html(res["statuses"][0].text);
    $("#author").html(res["statuses"][0]["user"].screen_name);
    $('#circleimg').attr('src', res["statuses"][0]["user"].profile_image_url);
  });

}

function tweets(a) {
  $("#spin").attr('class', 'fa fa-twitter fa-spin');
  $.post("resources/GETwitter.php", {
    tag: a
  }, function(data) {
    var res = JSON.parse(data);
    var tweets = `<div class="scrollbar" id="style-1" style="text-align:center;">
      <div align="center" class="tittle">
        <h1 class="text" style="font-family: 'Crimson Text', serif;" id="phrases">`+res["statuses"][0].text+`</h1>
      </div>
      <h3 class="text" style="color: #dedede;font-family: 'Crimson Text', serif;" id="author">`+res["statuses"][0]["user"].screen_name+`</h3>
      <img class="img-circle" id="circleimg" src="`+res["statuses"][0]["user"].profile_image_url+`">
    </div>`;
    $("#tweets").append(tweets);
    $("#spin").attr('class', 'fa fa-twitter');
  });
}

function trendstwitter() {
  $("#spin").attr('class', 'fa fa-twitter fa-spin');
  var reg = $("#reg").val();
  /// Invocamos a nuestro script PHP
  $.post("resources/GETrends.php",{ reg }, function(data) {
    var res = JSON.parse(data);
    var trends = " ";
    for (i = 0; i < 10; i++) {
      trends += "<li><a href='#' onclick=setInterval('javascript:tweets(/" + res[0]["trends"][i]["name"] + "/)',6000) >" + res[0]["trends"][i]["name"] + "</a></li>";
    }
    //onclick=setInterval('javascript:tweets(/"+res[0]["trends"][i]["name"]+"/)',6000)
    $("#trends").html(trends);

    $("#spin").attr('class', 'fa fa-twitter');
  });
}

$(".down").click(function() {
  var trends = document.getElementById('style-1');
  trends.scrollTop = trends.scrollHeight;
 });

function stop() {
  window.execCommand('stop');
}

function change_color(a) {
  if (a == 1) {
    var color = "rgb(236, 236, 236)";
  }
  if (a == 2) {
    var color = "rgb(112, 119, 128)";
  }
  if (a == 3) {
    var color = "rgb(209, 150, 213)";
  }
  $('.modal').modal("hide");
  $('.text').attr('style', 'color:' + color);
}
