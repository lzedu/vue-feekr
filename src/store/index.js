import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import search from './search'
import choose from './choose'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    search,
    choose
  }
})
