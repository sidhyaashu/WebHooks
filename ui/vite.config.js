import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5600',
        changeOrigin: true,
        // Remove the `rewrite` line if the backend uses `/api` as-is
      },
    },
  },
})
