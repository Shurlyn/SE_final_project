import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import TaskDisplay from '../components/tasks/TaskDisplay.vue'
import CalendarPage from '../components/calendar/CalendarPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TaskDisplay
  },

  {
    path: '/calendar',
    name: 'calendar',
    component: CalendarPage,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
