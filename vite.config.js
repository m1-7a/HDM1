import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/HDM1/',   // <-- مهم جداً لعرض الموقع على GitHub Pages
})
