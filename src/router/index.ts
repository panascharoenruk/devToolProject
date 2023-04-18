import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import LandPage from '@/views/landPage.vue';
import WorkerPage from '@/views/WorkerPage.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/land',
    component: LandPage
  },
  {
    path: '/worker',
    component: WorkerPage
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
