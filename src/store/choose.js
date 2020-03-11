const state ={
    id:'',
    name:''
}

const mutations = {
  setNav(state, {id,name}) {
    state.id = id
    state.name = name
  }
}

const actions = {
  saveNav({commit}, payload) {
    commit('setNav', payload)
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }