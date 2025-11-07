import HomeView from '@/views/HomeView.vue'
import WorkView from '@/views/WorkView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import PortfolioView from '@/views/PortfolioView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: HomeView },
  { path: '/work', component: WorkView },
  { path: '/projects', component: ProjectsView },
  { path: '/portfolio', component: PortfolioView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
