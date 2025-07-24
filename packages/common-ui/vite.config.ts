import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'index.ts', // TS 入口文件（替代原 js 入口）
      name: 'CommonUI',
      fileName: (format) => `common-ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: { vue: 'Vue' },
      },
    },
  },
  resolve: {
    extensions: ['.ts', '.vue', '.js'], // 优先解析 TS 文件
  },
  optimizeDeps: {
    include: ['vue'],
  },
});
