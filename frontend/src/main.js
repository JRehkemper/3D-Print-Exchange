import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import VueCookies from 'vue-cookies'
import store from './store'

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  VueCookies,
  store,
  render: h => h(App)
}).$mount('#app')
