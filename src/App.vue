<template>
  <nav>
    <router-link to="/">Task</router-link> 
    <router-link to="/calendar">Calendar</router-link>
  </nav>
  <div id="app">
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: pink;
  height: 100vh;
  width: 100wh;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
