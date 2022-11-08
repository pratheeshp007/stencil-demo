import { Config } from '@stencil/core';
import { reactOutputTarget as react } from '@stencil/react-output-target';

export const config: Config = {
  namespace: 'stencil-demo-1',
  outputTargets: [
    {
      type: 'dist-custom-elements',
      externalRuntime: false
    },
    react({
      componentCorePackage: 'stencil-demo-1',
      proxiesFile: '../stencil-demo-1-react/src/components/stencil-generated/index.ts',
      includeImportCustomElements: true,
      customElementsDir: 'dist/components'
    }),
    {
      type:'dist'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
