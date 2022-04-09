<template>
<TaskDisplay />
</template>

<script>
import TaskDisplay from "./components/tasks/TaskDisplay.vue"

export default {
  name: 'App',
  components: {
    TaskDisplay
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
