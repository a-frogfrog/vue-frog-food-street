import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Inspect from 'vite-plugin-inspect';
import { resolve } from 'path';
import { viteAliases } from '../../internal/vite-config';

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 4444, // 设置服务启动端口号
  },
  plugins: [vue(), Inspect()],
  resolve: {
    alias: {
      '#': resolve(__dirname, './src'),
      ...viteAliases,
    },
  },
});
