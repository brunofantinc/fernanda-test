import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://brunofantinc.github.io',
  base: '/fernanda',
  vite: {
    plugins: [tailwindcss()],
  },
});
