import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';

dotenv.config();

export default defineConfig({
  output: 'server', // indica que usas SSR
  adapter: vercel(), // este es el adaptador para vercel
  vite: {
    plugins: [tailwindcss()],
    define: {
      'process.env.MI_VARIABLE_PUBLICA': JSON.stringify(process.env.MI_VARIABLE_PUBLICA)
    },
  },
});
