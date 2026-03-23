import { sdk } from './sdk'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => ({
  tor: {
    kind: 'running',
    versionRange: '>=0.4.9.5:0-beta.4',
    healthChecks: ['tor'],
  },
}))
