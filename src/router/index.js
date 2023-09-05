import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FAQs from '../views/FAQsView.vue'
import Footer from '../components/Footer.vue'

const router = createRouter({
  history: createWebHistory(),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/faqs',
      name: 'faqs',
      components: {default: FAQs}
    },
    {
      path: '/',
      name: 'home',
      components: {default: HomeView, Footer}
    },
  ]
})

export default router
