import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { rm } from 'fs/promises'

export const v_0_8_5_1 = VersionInfo.of({
  version: '0.8.5:1',
  releaseNotes: {
    en_US: `**Bumps**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0`,
    es_ES: `**Cambios**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0`,
    de_DE: `**Aktualisierungen**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0`,
    pl_PL: `**Aktualizacje**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0`,
    fr_FR: `**Mises à jour**

- RoboSats → 0.8.5-alpha
- start-sdk → 1.5.0`,
  },
  migrations: {
    up: async ({ effects }) => {
      await rm('/media/startos/volumes/main/start9', { recursive: true }).catch(
        console.error,
      )
    },
    down: IMPOSSIBLE,
  },
})
