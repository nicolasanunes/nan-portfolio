import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useLocaleStore } from '@/stores/locale'

describe('Locale Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    // Mock localStorage
    vi.stubGlobal('localStorage', {
      getItem: vi.fn(),
      setItem: vi.fn(),
      removeItem: vi.fn(),
      clear: vi.fn(),
    })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('initializes with default locale', () => {
    const store = useLocaleStore()
    expect(store.locale).toBe('pt-BR')
  })

  it('setLocale updates locale and calls localStorage', () => {
    const store = useLocaleStore()
    store.setLocale('en-US')

    expect(store.locale).toBe('en-US')
    expect(localStorage.setItem).toHaveBeenCalledWith('locale', 'en-US')
  })

  it('toggle switches from pt-BR to en-US', () => {
    const store = useLocaleStore()
    store.locale = 'pt-BR'
    store.toggle()

    expect(store.locale).toBe('en-US')
  })

  it('toggle switches from en-US to pt-BR', () => {
    const store = useLocaleStore()
    store.locale = 'en-US'
    store.toggle()

    expect(store.locale).toBe('pt-BR')
  })

  it('setLocale updates document lang attribute', () => {
    const store = useLocaleStore()
    const mockSetAttribute = vi.fn()

    vi.stubGlobal('document', {
      documentElement: {
        setAttribute: mockSetAttribute,
      },
    })

    store.setLocale('en-US')

    expect(mockSetAttribute).toHaveBeenCalledWith('lang', 'en-US')
  })
})
