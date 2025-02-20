import { sdk } from './sdk'
import { T } from '@start9labs/start-sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects, started }) => {

  console.info('Starting Robosats!')

  const healthReceipts: T.HealthReceipt[] = []
  
  const primaryContainer = await sdk.SubContainer.of(
      effects,
      { imageId: 'robosats' },
      'primary',
    )

  await primaryContainer.exec(['chmod a+x /usr/local/bin/*.sh'])
  await primaryContainer.exec(['chmod a+x *.sh'])

  return sdk.Daemons.of(effects, started, healthReceipts).addDaemon('primary', {
    subcontainer: primaryContainer,
    command: ['./robosats-client.sh'],
    env: {
      APP_HOST: 'robosats.startos',
      APP_PORT: '12596',
      TOR_PROXY_IP: 'startos',
      TOR_PROXY_PORT: '9050'
    },
    mounts: sdk.Mounts.of().addVolume('main', null, '/root', false),
    ready: {
      display: 'Web Interface',
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: 'The web interface is ready',
          errorMessage: 'The web interface is not ready',
        }),
    },
    requires: [],
  })
})
