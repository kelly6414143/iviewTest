import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import api from './apis/api';
import './plugins/iview.js'
import './plugins/googleMap.js'
// import api from './apis/api'

Vue.config.productionTip = false

Vue.prototype.$api = api

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
