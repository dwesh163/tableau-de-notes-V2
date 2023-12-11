import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/grades/',
  plugins: [react()],
  server: {
    host: true,
    port: 5175,
    watch: {
       usePolling: true
     }
  }
})
