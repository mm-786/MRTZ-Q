// import { createStore } from 'vuex'


// export default createStore({
//   plugins: [createPersistedState()],
//   state: {
//     user:'pod',
//   },
//   mutations: {
//     user(state,dt){
//       state.user = dt
//     },

//   },
// })



import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    plugins: [createPersistedState()],
    state: {
      quotes:[],
      kys:[],
      like:{},
    },
    mutations: {
      quotes(state, dt) {
        state.quotes = dt
      },
      key(state, dt) {
        state.kys = dt
      },
      like(state, dt) {
        state.like = dt
      },
    },

      // enable strict mode (adds overhead!)
      // for dev mode only
      strict: process.env.DEBUGGING
  })

  return Store
}