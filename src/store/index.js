import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('access_token') || null,
  },
  getters:{
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
      if(context.getters.loginedIn) {
        return new Promise((resolve)=> {
          localStorage.removeItem('access_token')
          context.commit('destroyToken')
          resolve("sccuess")
        })
      }
    },
    retrieveToken(context, credentials) {
      return new Promise((resolve)=> {
        const token = "我是拓肯" + credentials.username + credentials.password
        localStorage.setItem('access_token', token)
        context.commit('retrieveToken', token)
        resolve("sccuess")
      })
    }
  },
  modules: {}
})

// return new Promise((resolve, reject) => {
//   axios.post('/login', {
//       username: credentials.username,
//       password: credentials.password,
//     })
//     .then(res => {
//       const token = res.data.access_token

//       localStorage.setItem('access_token', token)
//       context.commit('retrieveToken', token)
//       resolve(res)
//     })
//     .catch(err => {
//       console.log(err)
//       reject(err)
//     })
// })