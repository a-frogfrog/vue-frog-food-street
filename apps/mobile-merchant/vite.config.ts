import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { viteAliases } from '../../internal/vite-config';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5555, // 设置服务启动端口号
  },
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '#': resolve(__dirname, './src'),
      ...viteAliases,
    },
  },
});
