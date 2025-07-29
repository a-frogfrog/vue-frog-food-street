import { resolve } from 'path';

const aliases = {
  '@frog/*': resolve('../../packages/*'),
  '@frog/utils': resolve('../../packages/utils'),
  '@frog/hooks': resolve('../../packages/hooks'),
  '@frog/events': resolve('../../packages/effects/events'),
  '@frog/common-ui': resolve('../../packages/effects/common-ui'),
  '@frog/constants': resolve('../../packages/effects/constants'),
  '@frog/request': resolve('../../packages/effects/request'),
  '@frog/styles': resolve('../../packages/effects/styles'),
  '@frog/vite-config': resolve('../../internal/vite-config'),
};

export const viteAliases = aliases;

