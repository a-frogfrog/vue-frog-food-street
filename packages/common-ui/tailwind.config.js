/** @type {import('tailwindcss').Config} */
module.exports = {
  // 扫描所有子包的组件/页面
  content: ['./packages/common-ui/**/*.{vue,js,ts}'],
  theme: {
    extend: {},
  },
  plugins: [],
  // 关键：确保组件库样式能被业务包继承
  corePlugins: {
    preflight: false, // 关闭默认重置样式（避免组件库影响业务包）
  },
};
