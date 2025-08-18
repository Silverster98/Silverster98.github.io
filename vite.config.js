import { fileURLToPath, URL } from 'node:url'
import { copyFileSync } from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

function vitePluginGenerate404() {
  return {
    name: 'vite-plugin-generate-404',
    apply: 'build',
    closeBundle() {
      const srcPath = resolve(__dirname, 'dist', 'index.html')
      const destPath = resolve(__dirname, 'dist', '404.html')
      copyFileSync(srcPath, destPath)
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vitePluginGenerate404()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
