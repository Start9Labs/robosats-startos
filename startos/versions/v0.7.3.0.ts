import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'

export const v_0_7_3_0 = VersionInfo.of({
  version: '0.7.3:0',
  releaseNotes: 'Revamped for StartOS 0.3.6',
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
