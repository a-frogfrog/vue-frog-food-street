import { ref, watchEffect } from 'vue';

type ThemeType = 'light' | 'dark' | 'system';
const ThemeKey = '__theme__';

function getTheme() {
  return localStorage.getItem(ThemeKey) as ThemeType;
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
