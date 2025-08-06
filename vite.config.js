import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-icons/md']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(new URL('./src', import.meta.url).pathname)
    }
  }
})