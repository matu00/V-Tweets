Vue.component('tweets', {
	template: `
  <div class="scrollbar" id="style-1" style="text-align:center;">
  <div align="center" class="tittle">
    <h1 class="text" style="font-family: 'Crimson Text', serif;" id="phrases">Across the Universe</h1>
  </div>
  <h3 class="text" style="color: #dedede;font-family: 'Crimson Text', serif;" id="author">The Beatles</h3>
  <img class="img-circle" id="circleimg">

  <div align="center" class="tittle">
    <h1 class="text" style="font-family: 'Crimson Text', serif;">Across the Universe</h1>
  </div>
  <h3 class="text" style="color: #dedede;font-family: 'Crimson Text', serif;">The Beatles</h3>
  <img class="img-circle">
  </div>
   `
});

Vue.component('hijo', {
	template: `<p style="background: yellow;">Soy un parrafo en el componente hijo</p>`
});

new Vue({
    el: "#content",
    data: {
        message: 'Hello Vue!'
    }
});
