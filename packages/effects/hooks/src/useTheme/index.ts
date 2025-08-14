import { ref, watchEffect } from 'vue';

type ThemeType = 'light' | 'dark' | 'system';
const ThemeKey = '__theme__';

function getTheme() {
  const sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'; // 系统主题
  const theme = localStorage.getItem(ThemeKey) || sysTheme;
  return theme as ThemeType;
}

export function useTheme() {
  const currentTheme = ref<ThemeType>(getTheme());

  watchEffect(() => {
    document.documentElement.dataset.theme = currentTheme.value;
    localStorage.setItem(ThemeKey, currentTheme.value);
  });

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
  };
  return {
    currentTheme,
    toggleTheme,
  };
}
