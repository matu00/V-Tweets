Vue.component('tweets', {

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
