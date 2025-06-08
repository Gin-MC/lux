// astro.config.mjs
import { defineConfig } from 'astro/config'
import dotenv from 'dotenv'
import tailwindcss from '@tailwindcss/vite'

// Cargar variables de entorno
dotenv.config()

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    define: {
      'process.env': process.env
    }
  }
})
