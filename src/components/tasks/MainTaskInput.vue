<template>
<div class="inputbox" id="maininputbox">
  <input id="tasktext" type="text"  @keyup.enter="addTask" v-model="tasktext"/>
  <input type="datetime-local" id="duebyselect" v-model="taskdue"/> 
  </div>

  <p id="temporarytext"></p>

</template>

<script>
import store from './../../store'


export default {
    name: "MainTaskInput",

    data() {
      return {
        taskList: store.state.taskList,
        testerTaskList: [],
        hit: 0,
        tasktext: "",
        taskdue: ""

      }

    },

    methods: {

      addTask() {

        let hit = this.hit;
        this.hit+=1
        this.testerTaskList.push([this.tasktext, this.taskdue ])
        // P.S. doing it here so that it can reset the text every time I enter
        store.dispatch('addTask', [this.tasktext, this.taskdue])
        store.dispatch('addDate', this.taskdue)
        this.tasktext = ""
        console.log(this.taskdue)
        // let datespliced = this.taskList.splice("T")
        // console.log(datespliced)
        console.log(this.taskList)
        console.log(store.state.datesWithTasks[0])
        for (let i = 0; i <store.state.datesWithTasks; i++) {
          console.log("trtgvr" + store.state.datesWithTasks[i])
        }
        console.log(store.state.datesWithTasks[0])
        return console.log(hit, this.tasktext, store.state.taskList)
        
    },

    getTask() {
      this.taskList = store.getters.getTask;
    }


}



}






</script>

<style scoped lang="scss">

#tasktext {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 2px solid black;
  border-radius: 4px;
  background-color: skyblue;

}

.inputbox {
  // float: bottom;
  position: fixed;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  width: 60%;

}

</style>