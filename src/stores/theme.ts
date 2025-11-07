import { defineStore } from 'pinia'

type ThemeMode = 'system' | 'light' | 'dark'
const THEME_KEY = 'theme'

export const useThemeStore = defineStore('theme', {
  state: () => ({
    mode: 'system' as ThemeMode,
    systemPrefersDark: false,
    mql: null as MediaQueryList | null,
  }),
  getters: {
    isDark(state): boolean {
      return state.mode === 'system' ? state.systemPrefersDark : state.mode === 'dark'
    },
  },
  actions: {
    init() {
      if (typeof window === 'undefined') return
      const saved = localStorage.getItem(THEME_KEY) as ThemeMode | null
      if (saved === 'light' || saved === 'dark' || saved === 'system') this.mode = saved

      this.mql = window.matchMedia('(prefers-color-scheme: dark)')
      this.systemPrefersDark = this.mql.matches
      this.mql.addEventListener?.('change', this.onSystemChange)

      this.apply()
    },
    onSystemChange(e: MediaQueryListEvent) {
      this.systemPrefersDark = e.matches
      if (this.mode === 'system') this.apply()
    },
    setMode(mode: ThemeMode) {
      this.mode = mode
      localStorage.setItem(THEME_KEY, mode)
      this.apply()
    },
    toggle() {
      // Alterna entre light/dark preservando o estado atual do "system"
      const next = this.isDark ? 'light' : 'dark'
      this.setMode(next)
    },
    apply() {
      const root = document.documentElement
      root.classList.toggle('dark', this.isDark)
    },
  },
})
