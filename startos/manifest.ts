import { setupManifest } from '@start9labs/start-sdk'
import { SDKImageInputSpec } from '@start9labs/start-sdk/base/lib/types/ManifestTypes'

const BUILD = process.env.BUILD || ''

const arch =
  BUILD === 'x86_64' || BUILD === 'aarch64' ? [BUILD] : ['x86_64', 'aarch64']

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
  description: {
    short: 'A simple and private p2p bitcoin exchange',
    long: 'RoboSats is a simple and private way to exchange bitcoin for national currencies. Robosats simplifies the peer-to-peer user experience and uses lightning hold invoices to minimize custody and trust requirements. The deterministically generated avatars help users stick to best privacy practices.',
  },
  volumes: ['main'],
  images: {
    robosats: {
      source: {
        dockerTag: 'recksato/robosats-client:v0.8.2-alpha',
      },
      arch,
    } as SDKImageInputSpec,
  },
  hardwareRequirements: {
    arch,
  },
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {},
})
