import type { Config } from 'tailwindcss';

export default {
  content: [
    // 显式声明所有需要扫描的路径（包括其他包的组件）
    '../../../apps/**/*.{html,js,ts,jsx,tsx,vue}',
    '../../../packages/**/*.{html,js,ts,jsx,tsx,vue}',
    'node_modules/@frog/common-ui/**/*.{jsx,tsx,vue}',
  ],
  theme: {
    extend: {}, // 共享主题配置
  },
  plugins: [],
} satisfies Config;
