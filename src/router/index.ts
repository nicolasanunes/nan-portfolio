import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import CurriculumVitaeView from '@/views/CurriculumVitaeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { i18n } from '@/plugins/i18n'

const routes = [
  { path: '/', component: HomeView, meta: { titleKey: 'nav.home' } },
  {
    path: '/curriculum-vitae',
    component: CurriculumVitaeView,
    meta: { titleKey: 'nav.cv' },
  },
  { path: '/projects', component: ProjectsView, meta: { titleKey: 'nav.projects' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

router.afterEach((to) => {
  const { t } = i18n.global
  const titleKey = to.meta.titleKey as string
  if (titleKey) {
    document.title = `${t(titleKey)} | Nícolas`
  } else {
    document.title = 'Nícolas'
  }
})

export default router
