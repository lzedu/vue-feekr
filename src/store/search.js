import store from 'store'

function getData(){
  let obj = {}
  try{
      obj=store.get('guideRecentSearch')[0] || {id:'',keyword:''}
  }catch(err){
    obj={id:'',keyword:''}
  }
  return obj
}

let {id,keyword} = getData()

// let {id,keyword} = store.get('guideRecentSearch')[0] || {id:'',keyword:''}

const state ={
    id,
    key_word:keyword
}

const mutations = {
  setCity(state, {id, key_word}) {
    state.id = id
    state.key_word = key_word
  }
}

const actions = {
  saveCity({commit}, payload) {
    commit('setCity', payload)
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
  }