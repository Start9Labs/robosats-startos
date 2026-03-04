import { sdk } from './sdk'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => ({
  tor: {
    kind: 'running',
    versionRange: '>=0.4.8:0-beta.0',
    healthChecks: ['tor'],
  },
}))
