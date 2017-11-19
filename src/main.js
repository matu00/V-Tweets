import Vue from 'vue'
import App from './App.vue'
import Tweets from './components/tweets.vue'
import NavBar from './components/navbar.vue'
import ChangeTheme from './components/ChangeTheme.vue'
import Config from './components/config.vue'

Vue.component('ChangeTheme', ChangeTheme);
Vue.component('Config', Config);

Vue.component('navbar', NavBar);

Vue.component('tweets', Tweets);

new Vue({
  el: 'app',
  data: {
    showModal: false,
    styleTweets: {
    color: 'red',
    fontSize: '13px'
    }
  }
})
