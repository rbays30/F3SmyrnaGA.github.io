import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/F3SmyrnaGA.github.io/', // For user/organization pages on GitHub Pages
  plugins: [vue()],
})