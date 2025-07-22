import { resolve } from 'path';

const aliases = {
  '@frog/*': resolve('../../packages/*'),
  '@frog/common-ui': resolve('../../packages/common-ui'),
  '@frog/utils': resolve('../../packages/utils'),
  '@frog/hooks': resolve('../../packages/hooks'),
  '@frog/constants': resolve('../../packages/constants'),
  '@frog/events': resolve('../../packages/events'),
  '@frog/request': resolve('../../packages/request'),
  '@frog/vite-config': resolve('../../internal/vite-config'),
};

export const viteAliases = aliases;

export const tsAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [
    `${key}/*`,
    [value.replace(__dirname + '/', '') + '/*'],
  ]),
);
