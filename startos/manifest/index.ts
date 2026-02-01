import { setupManifest } from '@start9labs/start-sdk'
import i18n from './i18n'

export const manifest = setupManifest({
  id: 'robosats',
  title: 'Robosats',
  license: 'AGPL-V3',
  wrapperRepo: 'https://github.com/RoboSats/robosats-startos',
  upstreamRepo: 'https://github.com/Reckless-Satoshi/robosats',
  supportSite: 'https://github.com/RoboSats/robosats-startos/issues',
  marketingSite: 'https://learn.robosats.com/',
  donationUrl: 'https://learn.robosats.com/contribute/donate/',
  docsUrl:
    'https://github.com/Start9Labs/robosats-startos/blob/update/040/docs/instructions.md',
  description: i18n.description,
  volumes: ['main'],
  images: {
    robosats: {
      source: {
        dockerTag: 'recksato/robosats-client:v0.8.4-alpha',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  dependencies: {},
})
