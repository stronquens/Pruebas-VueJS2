import Vue from 'vue'
import Vuex from 'vuex'

/*import mutations from './mutations' 
import actions from './actions'
import getters from './getters'*/

import userModule from './userModule'
import userModule2 from './userModule2'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    user: userModule,
    user2: userModule2
  }
})


/*
export default new Vuex.Store({
  state: {
    count: 0 ,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters,
  mutations,
  actions
})*/

if (module.hot) {
  // accept actions and mutations as hot modules
  module.hot.accept(['./userModule', './userModule2'], () => {
    // require the updated modules
    // have to add .default here due to babel 6 module output
    const newUserModule = require('./userModule').default
    const newUserModule2 = require('./userModule2').default
    // swap in the new actions and mutations
    store.hotUpdate({
      modules: {
        user: newUserModule,
        user2: newUserModule2
      }
    })
  })
}

export default store