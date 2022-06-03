<template>

    <input type="week" id="dateselect" @keyup.enter="getDates" v-model="currentWeek"  />
    <div class="week">
        <WeekDay v-for="(day, i) in daysOfWeek" :key="i" :day="day" />
    </div>
</template>

<script>
import WeekDay from "./WeekDay.vue"
export default {
    name: "WeekGrid",
    components: {WeekDay},
    
    data() {
        return {
        daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        currentWeek: "",
        dateSelected: "",
        weekDates: []
        }
    },

    methods: {

    getDates() {
        let rawWeek = this.currentWeek;

        let year = parseInt(rawWeek.slice(0,4), 10);
        let week = parseInt(rawWeek.slice(6), 10);

        let day = (1 + (week) * 7);

        let dayOffBy = new Date(year, 0, 1).getDay();
        console.log(year)
        dayOffBy-= 1; // *** NEED TO EDIT THIS IF YOU MAKE WEEK START ANOTHER DAY
                    // 0 for Sunday first day of week, 1 for monday first day of week
        let days = [];

        for (let i = 0; i < 7; i++) {
            days.push(new Date(year, 0, day - dayOffBy + i)); 
        }

        this.weekDates = days;

        this.daysOfWeek= days;
        console.log("weekdays: " + days)
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