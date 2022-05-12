<template>
<div id="tasks">
  <TaskCard v-for="(task, i) in taskList" :key="i" :task="task"/>
</div>

<MainTaskInput />

</template>

<script>
import MainTaskInput from './MainTaskInput.vue'
import TaskCard from './TaskCard.vue'
import store from './../../store'


export default {
  components: { MainTaskInput, TaskCard },
  name: "TaskDisplay",
  props: ["tasklist"],
  data() {
    return {
        taskList: store.state.taskList
    }
  }
}

</script>

<style>



</style>