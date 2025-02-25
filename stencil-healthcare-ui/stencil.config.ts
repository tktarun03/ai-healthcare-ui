import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-healthcare-ui',
  outputTargets: [
    { type: 'dist' },
    { type: 'www', serviceWorker: null }
  ]
};
