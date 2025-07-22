import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import Inspect from 'vite-plugin-inspect';
import { resolve } from 'path';
import { viteAliases } from '../../internal/vite-config';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 3333, // 设置服务启动端口号
  },
  plugins: [vue(), tailwindcss(), Inspect()],
  resolve: {
    alias: {
      '#': resolve(__dirname, './src'),
      ...viteAliases,
    },
  },
});
