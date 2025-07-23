/** @type {import('tailwindcss').Config} */
module.exports = {
  // 基础主题配置（所有项目共享）
  content: [
    '../../packages/**/*.{js,ts,jsx,tsx,vue}',
    '../../apps/**/*.{js,ts,jsx,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#165DFF', // 统一主色调
        secondary: '#36D399',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
};
