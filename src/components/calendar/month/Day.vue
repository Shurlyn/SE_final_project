<template>
    <div class="day" :id=day>
        {{day}}
    </div>
</template>

<script>
export default {
    name:"WeekDay",
    props: ["day"]
}
</script>

<style lang="scss">

.day {
  width: 400px;
  height: 150px;
  background-color: green;
  border-style: solid;
  border-color: black;
  border-width: 1px;
}

#Monday {
    order: 1
}
#Tuesday {
    order: 2
}
#Wednesday {
    order: 3
}
#Thursday {
    order: 4
}
#Friday {
    order: 8;
    background-color: yellow;
}
#Saturday {
    order: 6;
    background-color: red;
}
#Sunday {
    order: 7
}



</style>