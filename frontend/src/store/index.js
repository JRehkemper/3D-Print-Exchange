import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    username: 'Stranger',
    userID: null,
  },
  getters: {
  },
  mutations: {
    setUsername(state, username) {
      state.username = username
    },
    setUserID(state, userID) {
      state.userID = userID
    }
  },
  actions: {
  },
  modules: {
  }
})
