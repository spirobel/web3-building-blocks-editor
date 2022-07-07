import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../web3-building-blocks/public/editor',
    emptyOutDir: true
  },
  server: {port: 1337}
})
