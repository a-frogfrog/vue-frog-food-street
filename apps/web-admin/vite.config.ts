import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteAliases } from '../../internal/vite-config';

import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3333,
  },
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '#': resolve(__dirname, './src'),
      ...viteAliases,
    },
  },
});
