// packages/tailwind-config/tailwind.config.js
module.exports = {
  theme: {
    extend: {
      // 共享主题配置（所有包通用）
      colors: {
        primary: '#2563eb', // 共享主色
        secondary: '#64748b', // 共享辅助色
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'], // 共享字体
      },
    },
  },
  plugins: [
    // 共享插件（如 @tailwindcss/forms 等）
    require('@tailwindcss/forms'),
  ],
};
