// eslint.config.js
import { defineConfig } from 'eslint/config';
import pluginVue from 'eslint-plugin-vue';


export default defineConfig([
  // pluginVue.configs['flat/recommended'],
  {
    rules: {
      semi: 'error',
      'prefer-const': 'error',
    },
  },
]);
