import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import { createRouter, createMemoryHistory } from 'vue-router'
import Navbar from '@/components/Navbar.vue'
import { i18n } from '@/plugins/i18n'

describe('Navbar Component', () => {
  let router: any

  beforeEach(() => {
    setActivePinia(createPinia())
    router = createRouter({
      history: createMemoryHistory(),
      routes: [
        { path: '/', component: { template: '<div>Home</div>' } },
        { path: '/projects', component: { template: '<div>Projects</div>' } },
        { path: '/curriculum-vitae', component: { template: '<div>CV</div>' } },
      ],
    })
  })

  it('renders properly', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router, i18n],
        stubs: {
          GradientButton: true,
        },
      },
    })

    expect(wrapper.find('nav').exists()).toBe(true)
  })

  it('has theme toggle button', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router, i18n],
        stubs: {
          GradientButton: true,
        },
      },
    })

    const themeButtons = wrapper.findAll('button')
    const hasThemeButton = themeButtons.some((btn) => {
      const ariaLabel = btn.attributes('aria-label')
      return ariaLabel && ariaLabel.includes('mode')
    })
    expect(hasThemeButton).toBe(true)
  })

  it('has language toggle button', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router, i18n],
        stubs: {
          GradientButton: true,
        },
      },
    })

    const langButtons = wrapper.findAll('button')
    const hasLangButton = langButtons.some((btn) => {
      const ariaLabel = btn.attributes('aria-label')
      return ariaLabel && ariaLabel.includes('language')
    })
    expect(hasLangButton).toBe(true)
  })

  it('has mobile menu button', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router, i18n],
        stubs: {
          GradientButton: true,
        },
      },
    })

    const mobileMenuButtons = wrapper.findAll('button')
    const hasMobileMenuButton = mobileMenuButtons.some((btn) => {
      const ariaLabel = btn.attributes('aria-label')
      return ariaLabel && (ariaLabel.includes('menu') || ariaLabel.includes('Menu'))
    })
    expect(hasMobileMenuButton).toBe(true)
  })

  it('has navigation links', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router, i18n],
        stubs: {
          GradientButton: true,
        },
      },
    })

    const links = wrapper.findAll('a')
    expect(links.length).toBeGreaterThan(0)
  })

  it('mobile menu starts closed', () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router, i18n],
        stubs: {
          GradientButton: true,
        },
      },
    })

    expect(wrapper.vm.mobileMenuOpen).toBe(false)
  })

  it('toggles mobile menu', async () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router, i18n],
        stubs: {
          GradientButton: true,
        },
      },
    })

    await wrapper.vm.toggleMobileMenu()
    expect(wrapper.vm.mobileMenuOpen).toBe(true)

    await wrapper.vm.toggleMobileMenu()
    expect(wrapper.vm.mobileMenuOpen).toBe(false)
  })

  it('closes mobile menu when closeMobileMenu is called', async () => {
    const wrapper = mount(Navbar, {
      global: {
        plugins: [router, i18n],
        stubs: {
          GradientButton: true,
        },
      },
    })

    wrapper.vm.mobileMenuOpen = true
    await wrapper.vm.closeMobileMenu()
    expect(wrapper.vm.mobileMenuOpen).toBe(false)
  })
})
