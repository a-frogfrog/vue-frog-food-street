import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { viteAliases } from '@frog/vite-config';

import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4444,
  },
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: viteAliases,
  },
});
