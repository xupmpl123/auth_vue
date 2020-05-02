import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

// Make Axios play CSRF
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
  },
  getters: {
    loginedIn(state) {
      return state.token !== null
    }
  },
  mutations: {
    destroyToken(state) {
      state.token = null
    },
    retrieveToken(state, token) {
      state.token = token
    }
  },
  actions: {
    destroyToken(context) {
      if (context.getters.loginedIn) {
        return new Promise((resolve) => {
          localStorage.removeItem('access_token')
          context.commit('destroyToken')
          resolve("sccuess")
        })
      }
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api-token-auth/', {
            email: credentials.email,
            password: credentials.password,
          })
          .then(res => {
            const token = res.data.token

            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    registerUser(context, credentials) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/register/', {
            username: credentials.username,
            email: credentials.email,
            password1: credentials.password1,
            password2: credentials.password2,
          })
          .then(res => {
            const token = res.data.token

            localStorage.setItem('access_token', token)
            context.commit('retrieveToken', token)
            resolve(res)
          })
          .catch(err => {
            reject(err)
          })
      }) 
    }
  },
  modules: {}
})