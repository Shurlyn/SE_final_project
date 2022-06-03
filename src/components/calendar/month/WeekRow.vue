<template>
    <div class="week">
        <Day v-for="(day, i) in daysOfWeek" :key="i" :day="day" />
    </div>


</template>

<script>
import Day from "./Day.vue"
export default {
    name: "WeekRow",
    components: {Day},

    data() {
        return {
        daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
        }
    }
}
</script>

<style lang="scss">
.week {
    display: flex;
    align-items: center;
    justify-content: center;
}


</style>