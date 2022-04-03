import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import * as THREE from 'three'

Vue.config.productionTip = false

const scene = new THREE.Scene();
console.log(scene)

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
