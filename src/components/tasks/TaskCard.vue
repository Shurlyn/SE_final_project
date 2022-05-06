<template>

<div class="task"> 
    {{task}}
</div>


</template>

<script> 
import "./MainTaskInput.vue";

export default {
    name: "TaskCard",
    props: ["task"]
}
</script>

<style>

.task {

    color: white;
    margin:auto;
    text-align: left;
    background-color: rgb(0, 0, 0, 0.4);    
    width: 80vw;
    height: 100px;
    align-self: center;
    padding: 3px;
    margin: 3px;


}

</style>