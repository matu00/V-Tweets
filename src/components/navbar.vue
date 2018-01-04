<template>
  <div id="navbar">
    <div class="navbar navbar-inverse navbar-fixed-top opaque-navbar">
      <div class="container">
        <div class="navbar-header">
          <li class="tab ">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navMain">
              <span class="glyphicon glyphicon-chevron-right" style="color:white;"></span>
            </button>
            <a class="dropdown-toggle navbar-brand" data-toggle="dropdown" href="#">V-Tweets</a>

            <ul class="dropdown-menu" style="margin-left:80px">
              <li class="dropdown-submenu">
                <a class="test" href="#" style="color:white;background-color: rgba(0,0,0,0.3)" v-on:click="change_background()">Change Background</a>
                <a class="test" href="#" @click="showCangeColor = true" style="color:white;background-color: rgba(0,0,0,0.3)">Change Theme</a>
              </li>
            </ul>
          </li>
        </div>
        <div class="collapse navbar-collapse" id="navMain">
          <ul class="nav navbar-nav pull-right">
            <li><a href="#" @click="showConfig = true"><i class="fa fa-ravelry fa-2x" aria-hidden="true"></i><br><b>Global</b></a></li>
            <li><a href="https://github.com/Matu95" target="_blank"><i class="fa fa-github fa-2x" aria-hidden="true"></i><br><b>My GitHub</b></a></li>
          </ul>
        </div>
      </div>
      <ChangeTheme v-if="showCangeColor" @close="showCangeColor = false"></ChangeTheme>
      <Config v-if="showConfig" @close="showConfig = false"></Config>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {
                showCangeColor: false,
                showConfig: false,
                backgrounds: [
                    'background-html0.jpg',
                    'background-html1.jpg',
                    'background-html2.jpg',
                    'background-html3.jpg',
                    'background-html4.jpg'
                ]
            }
        },
        methods: {
            change_background(){
                var num = Math.round(Math.random() * (4 - 1) + 1);
                $('#body').css('background-image', 'url(src/assets/img/'+this.backgrounds[num]+')');
                var loader = `
        <div id="preloader">
          <div class="sk-folding-cube">
              <div class="sk-cube1 sk-cube"></div>
              <div class="sk-cube2 sk-cube"></div>
              <div class="sk-cube4 sk-cube"></div>
              <div class="sk-cube3 sk-cube"></div>
          </div>
        </div>
        `;
                $("#loader").html(loader);
                setTimeout(function() {
                    hide()
                }, 2000);
                function hide() {
                    $("#loader").html(' ');
                }
            }
        }
    }
</script>

<style lang="css">
</style>