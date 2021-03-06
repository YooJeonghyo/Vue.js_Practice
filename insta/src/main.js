import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import router from './router/index.js'
import {store} from './store/store.js'

Vue.config.productionTip = false

Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
