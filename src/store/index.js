import { createStore } from 'vuex'

export default createStore({
  state: {
    taskList: [],
    datesWithTasks: []
  },

  mutations: {
    ADD_TASK(state, payload) {
        state.taskList = payload
    },
    ADD_DATES(state, payload) {
      state.datesWithTasks = payload


    }
  },

  actions: {
      addTask(context, payload) {
          const taskList = context.state.taskList;
          taskList.push(payload)
          console.log("store addtask ran")

          context.commit('ADD_TASK', taskList)
      },

      addDate(context, payload) {
        let datesWithTasks = context.state.datesWithTasks;
        datesWithTasks.push(payload)
        console.log("HHHHHH")

        // datesWithTasks = datesWithTasks.split("T")

        datesWithTasks = datesWithTasks.splice("T")


        context.commit('ADD_DATES', datesWithTasks)
      }

  },

  getters: {
    taskList: function (state) {
        return state.taskList
    }
  }

})