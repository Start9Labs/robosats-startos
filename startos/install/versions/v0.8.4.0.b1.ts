import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { rm } from 'fs/promises'

export const v_0_8_4_0_b1 = VersionInfo.of({
  version: '0.8.4:0-beta.1',
  releaseNotes: {
    en_US: 'Update to StartOS SDK beta.55',
    es_ES: 'Actualización a StartOS SDK beta.55',
    de_DE: 'Update auf StartOS SDK beta.55',
    pl_PL: 'Aktualizacja do StartOS SDK beta.55',
    fr_FR: 'Mise à jour vers StartOS SDK beta.55',
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
