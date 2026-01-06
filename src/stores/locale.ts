import { defineStore } from 'pinia'

type LocaleType = 'pt-BR' | 'en-US'
const LOCALE_KEY = 'locale'

interface LocaleState {
  locale: LocaleType
}

export const useLocaleStore = defineStore('locale', {
  state: (): LocaleState => ({
    locale: 'pt-BR',
  }),
  actions: {
    init() {
      if (typeof window === 'undefined') return
      const saved = localStorage.getItem(LOCALE_KEY) as LocaleType | null
      if (saved === 'pt-BR' || saved === 'en-US') {
        this.locale = saved
      } else {
        // Detecta idioma do navegador
        const browserLang = navigator.language
        this.locale = browserLang.startsWith('pt') ? 'pt-BR' : 'en-US'
      }
    },
    setLocale(locale: LocaleType) {
      this.locale = locale
      localStorage.setItem(LOCALE_KEY, locale)
      // Update document lang attribute
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('lang', locale)
      }
    },
    toggle() {
      const next: LocaleType = this.locale === 'pt-BR' ? 'en-US' : 'pt-BR'
      this.setLocale(next)
    },
  },
})
