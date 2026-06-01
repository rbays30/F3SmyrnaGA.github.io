import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // For user/organization pages on GitHub Pages
  plugins: [vue()],
})