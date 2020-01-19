import Vue from 'vue'
import Vuex from 'vuex'
import permission from '../src/store/permission'

Vue.use(Vuex)
console.log(permission)

const store = new Vuex.Store({
  namespaced: true,
  modules:{
    permission:permission
}
})

export default store;