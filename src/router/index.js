import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ServiceView from '../views/ServiceView.vue'
import Footer from '../components/Footer.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/service',
      name: 'service',
      components: {default: ServiceView}
    },
    {
      path: '/',
      name: 'home',
      components: {default: HomeView, Footer}
    },
  ]
})

export default router
