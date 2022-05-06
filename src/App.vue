<template>
<div class="tasks">
  <!-- <p>{{ $store.state.firstName }} {{ $store.state.lastName }}</p> -->
<TaskDisplay />
<!-- <MainTaskInput :tasklist="tasklist" /> -->
</div>

<!-- <div background-color="black"> </div> -->
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
  height: 100vh;
  width: 100vw;
}
.tasks {
  background-color: rgb(158, 158, 236);
  width: 100vw;
  height: 100vh;
  align-content: center;
  margin: 0;
}
</style>
