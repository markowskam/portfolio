import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
// import {store} from './store/store'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: Routes,
    mode: "history"
  });




Vue.config.productionTip = false

new Vue({
  // store: store,
  router: router,
  render: h => h(App),
}).$mount('#app')

