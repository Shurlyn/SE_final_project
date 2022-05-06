import { createStore } from 'vuex'

export default createStore({
  state: {
    taskList: []
  },

  mutations: {
    ADD_TASK(state, payload) {
        state.taskList = payload
    }
  },

  actions: {
      addTask(context, payload) {
          const taskList = context.state.taskList;
          taskList.push(payload)

          context.commit('ADD_TASK', taskList)
      },

  },

  getters: {
    taskList: function (state) {
        return state.taskList
    }
  }

})