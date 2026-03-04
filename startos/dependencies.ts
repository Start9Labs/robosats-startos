import { sdk } from './sdk'

export const setDependencies = sdk.setupDependencies(
  async ({ effects }) => ({
    tor: {
      kind: 'running',
      versionRange: '>=0.4.5:0',
      healthChecks: ['tor'],
    },
  }),
)
