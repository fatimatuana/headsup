import Vue from 'vue'
import VueRouter from 'vue-router'
import CategoriesOverview from '../views/CategoriesOverview.vue'
import Results from '../views/Results.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Overview',
    component: CategoriesOverview
  },
  {
    path: '/results',
    name: 'Results',
    component: Results
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
