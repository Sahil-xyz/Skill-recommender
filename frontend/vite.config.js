import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   proxy: {
  //     '/recommend': {
  //       target: 'https://skill-recommender-backend-3ord.onrender.com',
  //       changeOrigin: true
  //     }
  //   }
  // }
})
