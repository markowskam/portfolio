import Vue from 'vue'
import App from './App.vue'
import * as firebase from 'firebase'
import {store} from './store/store'
import VueRouter from 'vue-router'
import Routes from './routes'
import VueResource from 'vue-resource'

 // Initialize Firebase
 const config = {
  apiKey: "AIzaSyDDtRGGH2trwTrHh0ijITiXi14W0kD3pv8",
  authDomain: "portfolio-blog-c7083.firebaseapp.com",
  databaseURL: "https://portfolio-blog-c7083.firebaseio.com",
  projectId: "portfolio-blog-c7083",
  storageBucket: "portfolio-blog-c7083.appspot.com",
  messagingSenderId: "177453477998"
};

firebase.initializeApp(config);
Vue.prototype.$firebase = firebase;

//Routing
Vue.use(VueRouter)

const router = new VueRouter({
    routes: Routes,
    mode: "history"
  });

//Http requests
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')

