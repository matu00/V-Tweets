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
    interval: null,
    trends: null,
    region: 1,
    ActiveHast: null,
    tweet: "Across the Universe",
    author: "The beatles",
    img: null
  },
  methods: {
    GetTrends(){
      $("#spin").attr('class', 'fa fa-twitter fa-spin');
      axios.post('http://localhost/M-Experience/resources/GETrends.php',{
        region: this.region
      },
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }//esto es necesario para poder enviar data por AXIOS POST a file.php
      }
      ).then(response => {
          this.trends = response.data[0].trends;
          $("#spin").attr('class', 'fa fa-twitter');
          this.trends = this.trends.splice(1,15);
        }).catch (e => {
          this.showErrorMsg({message: "Lo sentimos ah ocurrio un error"});
          $("#spin").attr('class', 'fa fa-twitter');
        })
    },
    tweets(tag){
      this.ActiveHash = tag;

      $("#spin").attr('class', 'fa fa-twitter fa-spin');
      clearInterval(this.interval);
      this.interval = setInterval(function () {
      axios.post(`http://localhost/M-Experience/resources/GETwitter.php`, {
          tag: this.ActiveHash,
      },
      {
          headers: {'Content-Type': 'application/x-www-form-urlencoded' }
      }
      ).then(response => {
          this.tweet = response.data['statuses'][0].text;
          this.author = response.data['statuses'][0]['user'].screen_name;
          this.img = response.data['statuses'][0]['user'].profile_image_url;
          this.showSuccessMsg({
              title: "",
              message: "siguiendo a #"+this.ActiveHash,
          });
          $("#spin").attr('class', 'fa fa-twitter');
      })
      .catch(e => {
          this.showErrorMsg({message: "Lo sentimos ah ocurrio un error"});
          $("#spin").attr('class', 'fa fa-twitter');
      })

      }.bind(this), 20000);
      //this.showWarnMsg({message: tag});
    }
  },
  notifications: {
   showSuccessMsg: {
     type: VueNotifications.types.success,
     title: 'Exito'
   },
   showInfoMsg: {
     type: VueNotifications.types.info,
     title: 'Info'
   },
   showWarnMsg: {
     type: VueNotifications.types.warn,
     title: 'Atención'
   },
   showErrorMsg: {
     type: VueNotifications.types.error,
     title: 'Error'
   }
 }
})
