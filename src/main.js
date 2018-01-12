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

function toast({title, message, type, timeout, cb}) {
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
        tweet: "Welcome to V-Tweets",
        author: null,
        img: null,
        count: 0,
    },
    methods: {
        GetTrends() {
            $("#spin").attr('class', 'fa fa-twitter fa-spin');
            axios.post('http://localhost/V-Tweets/resources/GETrends.php', {
                    region: this.region
                },
                {
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}//esto es necesario para poder enviar data por AXIOS POST a file.php
                }
            ).then(response => {
                this.trends = response.data[0].trends;
                $("#spin").attr('class', 'fa fa-twitter');
                this.trends = this.trends.splice(1, 15);
            }).catch(e => {
                this.showErrorMsg({message: "Lo sentimos ah ocurrio un error"});
                $("#spin").attr('class', 'fa fa-twitter');
            })
        },
        tweets(tag) {
            this.ActiveHash = tag;

            $("#spin").attr('class', 'fa fa-twitter fa-spin');
            clearInterval(this.interval);
            this.interval = setInterval(function () {
                axios.post(`http://localhost/V-Tweets/resources/GETwitter.php`, {
                        tag: this.ActiveHash,
                    },
                    {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    }
                ).then(response => {
                    this.tweet = response.data['statuses'][0].text;
                    this.author = response.data['statuses'][0]['user'].screen_name;
                    this.img = response.data['statuses'][0]['user'].profile_image_url;
                    this.update();
                    this.showSuccessMsg({
                        title: "",
                        message: "siguiendo a #" + this.ActiveHash,
                    });
                    $("#spin").attr('class', 'fa fa-twitter');
                })
                    .catch(e => {
                        this.showErrorMsg({message: "Lo sentimos ah ocurrio un error"});
                        $("#spin").attr('class', 'fa fa-twitter');
                    })

            }.bind(this), 20000);
            //this.showWarnMsg({message: tag});
        },
        update() {
            var content = `
          <div class="scrollbar" id="style-1" style="text-align:center;">
            <div align="center" class="tittle">
              <h1 class="text" style="font-family: 'Crimson Text', serif;" id="phrases">` + this.tweet + `</h1>
            </div>
            <a href="#"><h3 class="text" style="color: #dedede;font-family: 'Crimson Text', serif;" id="author">` + this.author + `</h3></a>
            <img class="img-circle" id="circleimg" src="` + this.img + `">
          </div>
        `;
            $('#newtweet').prepend(`<div id="` + this.count + `"></div>`);
            $(content).hide().appendTo("#" + this.count).fadeIn(3000);
            this.count++;
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