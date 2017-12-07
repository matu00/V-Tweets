<template>
  <div class="scrollbar" id="style-1" style="text-align:center;">
    <div align="center" class="tittle">
      <h1 class="text" style="font-family: 'Crimson Text', serif;" id="phrases">{{this.$root.tweet}}</h1>
    </div>
    <a href="#"><h3 class="text" style="color: #dedede;font-family: 'Crimson Text', serif;" id="author">{{this.$root.author}}</h3></a>
    <h2>{{msg}}</h2>
    <img class="img-circle" id="circleimg" :src="this.$root.img">
    <!-- <ol v-if="trends">
      <li v-for="(trend,index) in trends">
        <label href="#" v-on:click="tweets(trend.name)">{{index}} {{trend.name}}</label>
      </li>
    </ol> -->
  </div>
</template>

<script>
  export default {
      name: 'tweets',
      data () {
          return {
          }
      },
  }
</script>

<style lang="css">
</style>
