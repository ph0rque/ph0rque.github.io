// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ph0rque.github.io',
  integrations: [react({
    include: ['**/react/*', '**/*.tsx', '**/*.jsx']
  })],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: ['react', 'react-dom', 'react/jsx-runtime']
    }
  }
});