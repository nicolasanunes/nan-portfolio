import { defineStore } from 'pinia'

type LocaleType = 'pt-BR' | 'en-US'
const LOCALE_KEY = 'locale'

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locale: 'pt-BR' as LocaleType,
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
    },
    toggle() {
      const next = this.locale === 'pt-BR' ? 'en-US' : 'pt-BR'
      this.setLocale(next)
    },
  },
})
