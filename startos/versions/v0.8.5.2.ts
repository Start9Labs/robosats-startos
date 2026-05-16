import { VersionInfo, IMPOSSIBLE } from '@start9labs/start-sdk'
import { rm } from 'fs/promises'

export const v_0_8_5_2 = VersionInfo.of({
  version: '0.8.5:2',
  releaseNotes: {
    en_US: 'Bumps start-sdk to 1.5.2.',
    es_ES: 'Actualiza start-sdk a 1.5.2.',
    de_DE: 'Aktualisiert start-sdk auf 1.5.2.',
    pl_PL: 'Aktualizuje start-sdk do 1.5.2.',
    fr_FR: 'Met à jour start-sdk vers 1.5.2.',
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
