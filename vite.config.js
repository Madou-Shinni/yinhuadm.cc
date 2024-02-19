import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    }
  },
  server: {
    proxy: {
      // 代理所有`/api`的请求
      '/api': {
        target: 'http://127.0.0.1:8080',
        rewrite: (path) => path.replace(/^\/api/, ''),
      }
    },
  }
})
