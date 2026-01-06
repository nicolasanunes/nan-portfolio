import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import App from '../App.vue'
import { createRouter, createMemoryHistory } from 'vue-router'
import { i18n } from '../plugins/i18n'

describe('App', () => {
  beforeEach(() => {
    setActivePinia(createPinia())

    // Mock matchMedia
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn(),
      })),
    })
  })

  it('renders properly', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', component: { template: '<div>Home</div>' } }],
    })

    const wrapper = mount(App, {
      global: {
        plugins: [router, i18n],
        stubs: {
          StarsBackground: true,
          FluidCursor: true,
          Navbar: true,
          RouterView: true,
        },
      },
    })

    expect(wrapper.find('header').exists()).toBe(true)
    expect(wrapper.find('main').exists()).toBe(true)
  })

  it('has proper semantic structure', () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', component: { template: '<div>Home</div>' } }],
    })

    const wrapper = mount(App, {
      global: {
        plugins: [router, i18n],
        stubs: {
          StarsBackground: true,
          FluidCursor: true,
          Navbar: true,
          RouterView: true,
        },
      },
    })

    expect(wrapper.find('header[role="banner"]').exists()).toBe(true)
    expect(wrapper.find('main[role="main"]').exists()).toBe(true)
  })
})
