import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap'
import toasted from 'vue-toasted'
Vue.use(toasted)

Vue.use(Vuesax)
// Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
