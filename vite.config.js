import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// For GitHub Pages project sites, base path must match the repo name.
// For root-domain hosting (custom domain or user pages), set base to '/'.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/windows-xp-portfolio/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
