<template>
  <!-- <p>{{returnDate}}</p> -->
  <!-- <p>{{currentTime}}</p> -->
  <!-- <MonthGrid /> -->
  <WeekGrid />
</template>

<script>
// import MonthGrid from "./month/MonthGrid.vue";
import WeekGrid from "./week/WeekGrid.vue"
// require('./date');
import * as dayjs from "dayjs"
// const dayjs = require('./../../../node_modules/datejs');
let date = dayjs();

export default {
  name: "CalendarPage",
  props: ["text"],
  components: { WeekGrid },
    // components: {MonthGrid, WeekGrid},

  
  methods: {
    returnDate() {
      return date.time()
    },
    currentTime() {
      return Date.month()
    }
  }

}
</script>

<style>

</style>