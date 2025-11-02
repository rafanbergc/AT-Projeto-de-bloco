import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // já deixa ouvir todos os IPs
    port: 5173, // opcional, só pra garantir
    allowedHosts: 'all' // permite qualquer host externo
  }
})
