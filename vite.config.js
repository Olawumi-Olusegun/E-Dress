import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': "http://localhost:2000"
      // '/api': {
      //   target: ['http://localhost', 'http://localhost:2000'],
      //   changeOrigin: true,
      //   secure: false,      
      //   ws: true,
      //   rewrite: (path) => path.replace(/^\/api/, ''),
      // }
    }
  }
})
