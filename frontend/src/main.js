import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueCookies from 'vue-cookies'
//import axios from 'axios'
//import VueAxios from 'vue-axios'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  VueCookies,
  //VueAxios,
  //axios,
 
  render: h => h(App)
}).$mount('#app')
