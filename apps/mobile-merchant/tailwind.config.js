/** @type {import('tailwindcss').Config} */
module.exports = {
  // 继承共享配置
  ...require('@my-org/tailwind-config'),
  // 子项目专属配置（覆盖或扩展）
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // 仅当前项目的文件路径
  ],
  // 可选：子项目单独扩展主题
  theme: {
    ...require('@my-org/tailwind-config').theme,
    extend: {
      // 仅web项目需要的额外样式
      spacing: {
        128: '32rem',
      },
    },
  },
};
