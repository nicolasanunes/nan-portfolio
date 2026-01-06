import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { i18n } from '@/plugins/i18n'

describe('HomeView', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('renders properly', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', component: HomeView }],
    })

    const wrapper = mount(HomeView, {
      global: {
        plugins: [router, i18n],
        stubs: {
          CardSpotlight: { template: '<div class="card-spotlight"><slot /></div>' },
          Button: { template: '<button><slot /></button>' },
          Avatar: { template: '<div><slot /></div>' },
          AvatarImage: { template: '<img />' },
          AvatarFallback: { template: '<div><slot /></div>' },
          BlurReveal: { template: '<div><slot /></div>' },
          ColourfulText: { template: '<div><slot /></div>' },
          RadiantText: { template: '<div><slot /></div>' },
          RouterLink: { template: '<a :href="to"><slot /></a>', props: ['to'] },
        },
      },
    })

    expect(wrapper.find('.flex').exists()).toBe(true)
  })

  it('has social links with aria-labels', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', component: HomeView }],
    })

    const wrapper = mount(HomeView, {
      global: {
        plugins: [router, i18n],
        stubs: {
          CardSpotlight: { template: '<div class="card-spotlight"><slot /></div>' },
          Button: { template: '<button><slot /></button>' },
          Avatar: { template: '<div><slot /></div>' },
          AvatarImage: { template: '<img />' },
          AvatarFallback: { template: '<div><slot /></div>' },
          BlurReveal: { template: '<div><slot /></div>' },
          ColourfulText: { template: '<div><slot /></div>' },
          RadiantText: { template: '<div><slot /></div>' },
          RouterLink: { template: '<a :href="to"><slot /></a>', props: ['to'] },
        },
      },
    })

    const links = wrapper.findAll('a[aria-label]')
    expect(links.length).toBeGreaterThan(0)
  })

  it('contains LinkedIn link with proper aria-label', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', component: HomeView }],
    })

    const wrapper = mount(HomeView, {
      global: {
        plugins: [router, i18n],
        stubs: {
          CardSpotlight: { template: '<div class="card-spotlight"><slot /></div>' },
          Button: { template: '<button><slot /></button>' },
          Avatar: { template: '<div><slot /></div>' },
          AvatarImage: { template: '<img />' },
          AvatarFallback: { template: '<div><slot /></div>' },
          BlurReveal: { template: '<div><slot /></div>' },
          ColourfulText: { template: '<div><slot /></div>' },
          RadiantText: { template: '<div><slot /></div>' },
          RouterLink: { template: '<a :href="to"><slot /></a>', props: ['to'] },
        },
      },
    })

    const links = wrapper.findAll('a[aria-label="LinkedIn"]')
    expect(links.length).toBe(1)
  })

  it('contains GitHub link with proper aria-label', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', component: HomeView }],
    })

    const wrapper = mount(HomeView, {
      global: {
        plugins: [router, i18n],
        stubs: {
          CardSpotlight: { template: '<div class="card-spotlight"><slot /></div>' },
          Button: { template: '<button><slot /></button>' },
          Avatar: { template: '<div><slot /></div>' },
          AvatarImage: { template: '<img />' },
          AvatarFallback: { template: '<div><slot /></div>' },
          BlurReveal: { template: '<div><slot /></div>' },
          ColourfulText: { template: '<div><slot /></div>' },
          RadiantText: { template: '<div><slot /></div>' },
          RouterLink: { template: '<a :href="to"><slot /></a>', props: ['to'] },
        },
      },
    })

    const links = wrapper.findAll('a[aria-label="GitHub"]')
    expect(links.length).toBe(1)
  })

  it('has navigation to CV and Projects', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: HomeView },
        { path: '/curriculum-vitae', component: { template: '<div>CV</div>' } },
        { path: '/projects', component: { template: '<div>Projects</div>' } },
      ],
    })

    const wrapper = mount(HomeView, {
      global: {
        plugins: [router, i18n],
        stubs: {
          CardSpotlight: { template: '<div class="card-spotlight"><slot /></div>' },
          Button: { template: '<button><slot /></button>' },
          Avatar: { template: '<div><slot /></div>' },
          AvatarImage: { template: '<img />' },
          AvatarFallback: { template: '<div><slot /></div>' },
          BlurReveal: { template: '<div><slot /></div>' },
          ColourfulText: { template: '<div><slot /></div>' },
          RadiantText: { template: '<div><slot /></div>' },
          RouterLink: { template: '<a :href="to"><slot /></a>', props: ['to'] },
        },
      },
    })

    const routerLinks = wrapper.findAll('a')
    const hasCVLink = routerLinks.some((link) => link.attributes('href') === '/curriculum-vitae')
    const hasProjectsLink = routerLinks.some((link) => link.attributes('href') === '/projects')

    expect(hasCVLink).toBe(true)
    expect(hasProjectsLink).toBe(true)
  })
})
