import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const getServerConfig = () => {
  return {
    host: '0.0.0.0',
    port: 5173,
  }
}

// https://vite.dev/config/
export default defineConfig({
  base: '/nan-portfolio/',
  server: getServerConfig(),
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
