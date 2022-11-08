import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-demo-2',
  outputTargets: [
    {type: 'dist'},
    {
      type: 'dist-custom-elements',
      externalRuntime: true
    },
    react({
      componentCorePackage: 'stencil-demo-2',
      proxiesFile: '../stencil-demo-2-react/src/components/stencil-generated/index.ts',
    }),
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
