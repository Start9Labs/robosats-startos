import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'robosats',
  title: 'Robosats',
  license: 'mit',
  wrapperRepo: 'https://github.com/RoboSats/robosats-startos',
  upstreamRepo: 'https://github.com/Reckless-Satoshi/robosats',
  supportSite: 'https://github.com/RoboSats/robosats-startos/issues',
  marketingSite: 'https://learn.robosats.com/',
  donationUrl: 'https://learn.robosats.com/contribute/donate/',
  description: {
    short: 'A simple and private p2p bitcoin exchange',
    long: 'RoboSats is a simple and private way to exchange bitcoin for national currencies. Robosats simplifies the peer-to-peer user experience and uses lightning hold invoices to minimize custody and trust requirements. The deterministically generated avatars help users stick to best privacy practices.',
  },
  assets: [],
  volumes: ['main'],
  images: {
    robosats: {
      source: {
        dockerTag: 'recksato/robosats-client:v0.7.3-alpha',
      },
      arch: ['x86_64', 'aarch64'],
    },
  },
  hardwareRequirements: {},
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: 'ATTENTION: Your browser must have Tor support to use this service.',
    stop: null,
  },
  dependencies: {},
})
