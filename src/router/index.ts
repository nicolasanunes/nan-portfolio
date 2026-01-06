import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { i18n } from '@/plugins/i18n'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    meta: { titleKey: 'nav.home' },
  },
  {
    path: '/curriculum-vitae',
    component: () => import('@/views/CurriculumVitaeView.vue'),
    meta: { titleKey: 'nav.cv' },
  },
  {
    path: '/projects',
    component: () => import('@/views/ProjectsView.vue'),
    meta: { titleKey: 'nav.projects' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

router.onError((error) => {
  console.error('Router error:', error)
})

router.afterEach((to) => {
  const { t, locale } = i18n.global
  const titleKey = to.meta.titleKey as string

  // Update title
  if (titleKey) {
    document.title = `${t(titleKey)} | Nícolas`
  } else {
    document.title = 'Nícolas'
  }

  // Update lang attribute
  document.documentElement.setAttribute('lang', locale.value === 'pt-BR' ? 'pt-BR' : 'en-US')

  // Update meta description
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', t('home.subtitle') || 'Nícolas - Fullstack Developer')
  }
})

export default router
