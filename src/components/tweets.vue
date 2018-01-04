<template>
  <div class="scrollbar" id="style-1" style="text-align:center;">
    <div id="newtweet"></div>

    <div align="center" class="tittle">
      <h1 class="text" style="font-family: 'Crimson Text', serif;" id="phrases">{{this.tittle}}</h1>
    </div>
    <a href="#"><h3 class="text" style="color: #dedede;font-family: 'Crimson Text', serif;" id="author">{{this.info}}</h3></a>
    <img class="img-circle" id="circleimg">
  </div>
</template>

<script>
    export default {
        name: 'tweets',
        data () {
            return {
                tittle: 'Welcome to V-Tweet',
                info: 'matu ;)'
            }
        },
    }
</script>

<style lang="css">
</style>