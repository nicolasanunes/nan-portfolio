import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useThemeStore } from '@/stores/theme'

describe('Theme Store', () => {
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

  it('initializes with default values', () => {
    const store = useThemeStore()
    expect(store.mode).toBe('system')
    expect(store.systemPrefersDark).toBe(false)
    expect(store.mql).toBe(null)
  })

  it('isDark getter returns correct value for dark mode', () => {
    const store = useThemeStore()
    store.mode = 'dark'
    expect(store.isDark).toBe(true)
  })

  it('isDark getter returns correct value for light mode', () => {
    const store = useThemeStore()
    store.mode = 'light'
    expect(store.isDark).toBe(false)
  })

  it('isDark getter returns systemPrefersDark when mode is system', () => {
    const store = useThemeStore()
    store.mode = 'system'
    store.systemPrefersDark = true
    expect(store.isDark).toBe(true)

    store.systemPrefersDark = false
    expect(store.isDark).toBe(false)
  })

  it('setMode updates mode and calls localStorage', () => {
    const store = useThemeStore()
    store.setMode('dark')

    expect(store.mode).toBe('dark')
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark')
  })

  it('toggle switches from dark to light', () => {
    const store = useThemeStore()
    store.mode = 'dark'
    store.toggle()

    expect(store.mode).toBe('light')
  })

  it('toggle switches from light to dark', () => {
    const store = useThemeStore()
    store.mode = 'light'
    store.toggle()

    expect(store.mode).toBe('dark')
  })

  it('cleanup removes event listener', () => {
    const store = useThemeStore()
    const mockRemoveEventListener = vi.fn()
    store.mql = {
      removeEventListener: mockRemoveEventListener,
    } as any

    store.cleanup()

    expect(mockRemoveEventListener).toHaveBeenCalled()
    expect(store.mql).toBe(null)
  })
})
