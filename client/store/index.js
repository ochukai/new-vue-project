import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

/* tasks */
const state = {
  count: 0
}

const mutations = {
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  }
}

const actions = {

  incrementAsync({ state, commit, rootState }) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
  
}

const tasks = {
  // getters
  state,
  mutations,
  actions,
};

const logger = createLogger()
const store = new Vuex.Store({
  modules: {
    tasks
  },
  plugins: [ logger ]
})

export default store
