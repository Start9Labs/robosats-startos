import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_7_7_1 = VersionInfo.of({
  version: '0.7.7:1',
  releaseNotes: 'Revamped for StartOS 0.4.0',
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
