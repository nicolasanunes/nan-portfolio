import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { i18n } from './plugins/i18n'

import './assets/css/style.css'
import './assets/css/cursor.css'

document.documentElement.classList.add('custom-cursor')

const app = createApp(App)

// Global error handler
app.config.errorHandler = (err, instance, info) => {
  console.error('Global error:', err)
  console.error('Error info:', info)
}

// Warning handler for development
if (import.meta.env.DEV) {
  app.config.warnHandler = (msg, instance, trace) => {
    console.warn('Warning:', msg)
  }
}

// Install plugins in optimal order
app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
