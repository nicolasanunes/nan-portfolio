import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './assets/css/style.css'
import './assets/css/cursor.css'

document.documentElement.classList.add('custom-cursor')

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
