import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api: 'http://local.jrehkemper.de:3000',
    loggedIn: false,
    username: 'Stranger',
    userID: null,
  },
  getters: {
  },
  mutations: {
    logIn(state) {
      state.loggedIn = true
    },
    logOut(state) {
      state.loggedIn = false
    },
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
