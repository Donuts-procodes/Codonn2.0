import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allow external access
    port: 5173,
    allowedHosts: ['3c8d-122-161-65-92.ngrok-free.app']  // 👈 Add this line
  }
});