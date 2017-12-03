import Vue from 'vue';
import axios from 'axios';
import VueResource from 'vue-resource';
import Cors from 'cors';
import Tweets from './components/tweets.vue';
import NavBar from './components/navbar.vue';
import ChangeTheme from './components/ChangeTheme.vue';
import Config from './components/config.vue';

//VueNotifications
import VueNotifications from 'vue-notifications'
import iziToast from 'izitoast'// https://github.com/dolce/iziToast
import 'izitoast/dist/css/iziToast.min.css'
function toast ({title, message, type, timeout, cb}) {
  if (type === VueNotifications.types.warn) type = 'warning'
  return iziToast[type]({title, message, timeout})
}
const options = {
  success: toast,
  error: toast,
  info: toast,
  warn: toast
}

Vue.use(VueNotifications, options)
Vue.use(VueResource);
Vue.use(Cors);

Vue.component('ChangeTheme', ChangeTheme);
Vue.component('Config', Config);
Vue.component('navbar', NavBar);
Vue.component('tweets', Tweets);

new Vue({
  el: '#app',
  data: {
    showModal: false,
    trends: null
  },
  methods: {
    GetTrends(){
      $("#spin").attr('class', 'fa fa-twitter fa-spin');
      axios.get('http://localhost/M-Experience/resources/GETrends.php',{
        firstName: 'Fred'
      }
      ).then(response => {
          this.trends = response.data[0].trends
          $("#spin").attr('class', 'fa fa-twitter');
          this.trends = this.trends.splice(1,15);
        }).catch (e => {
          this.showErrorMsg({message: "Lo sentimos ah ocurrio un error"});
          $("#spin").attr('class', 'fa fa-twitter');
        })
    },
    tweets(tag){
      var tag = '1';
      axios.post(`http://localhost/M-Experience/resources/GETwitter.php`, {
      tag: this.trends
      }).then(response => {

      })
      .catch(e => {
        this.showErrorMsg({message: "Lo sentimos ah ocurrio un error"});
      })
      //this.showWarnMsg({message: tag});
    }
  },
  notifications: {
   showSuccessMsg: {
     type: VueNotifications.types.success,
     title: 'Hello there',
     message: 'That\'s the success!'
   },
   showInfoMsg: {
     type: VueNotifications.types.info,
     title: 'Hey you',
     message: 'Here is some info for you'
   },
   showWarnMsg: {
     type: VueNotifications.types.warn,
     title: 'Atención',
     message: 'That\'s the kind of warning'
   },
   showErrorMsg: {
     type: VueNotifications.types.error,
     title: 'Error',
     message: 'That\'s the error',
   }
 }
})
