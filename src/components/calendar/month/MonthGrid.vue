<template>
  <div id="week">
      <div id="a"><p>A</p></div>
      <div id="b"><p>B</p></div>
      <div id="c"><p>C</p></div>
      <div id="d"><p>D</p></div>
      <div id="e"><p>E</p></div>
      <div id="f"><p>F</p></div>
      <div id="g"><p>G</p></div>
  </div>

<WeekRow />

</template>

<script>
import WeekRow from "./WeekRow.vue"

export default {
    name: "MonthGrid",
    components: {WeekRow}
}
</script>

<style>

#week {
    display: flex;
    align-items: center;
    justify-content: center;
}
#a, #b, #c, #d, #e, #f, #g {
  width: 400px;
  height: 150px;
  background-color: green;
  border-style: solid;
  border-color: black;
  border-width: 1px;
}


.a {
    order: 1
}
.b {
    order: 2
}
.c {
    order: 3
}
.d {
    order: 4
}
.e {
    order: 5
}
.f {
    order: 6
}
.g {
    order: 7
}

</style>