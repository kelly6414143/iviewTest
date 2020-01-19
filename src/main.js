import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './apis/api';
import './plugins/iview.js'
import './plugins/googleMap.js'
// import api from './apis/api'
import commonFun from './components/CommonFun'

Vue.config.productionTip = false

Vue.prototype.$api = api
Vue.prototype.commonFun = commonFun

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
