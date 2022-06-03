<template>
  <div class="day" :id=day>
    <p>{{day}}</p>
    <hr/>
    
  
  
  </div>
</template>

<script>
export default {
    name: "WeekDay",
    props: ["day"]
}
</script>

<style>
.day {
  width: 400px;
  height: 80vh;
  background-color: green;
  border-style: solid;
  border-color: black;
  border-width: 1px;
}

hr {
    /* margin:  */
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
    order: 5;
    /* background-color: yellow; */
}
#Saturday {
    order: 6;
    /* background-color: red; */
}
#Sunday {
    order: 7
}

</style>