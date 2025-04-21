import { sdk } from './sdk'
import { T } from '@start9labs/start-sdk'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects, started }) => {
  /**
   * ======================== Setup (optional) ========================
   *
   * In this section, we fetch any resources or run any desired preliminary commands.
   */
  console.info('Starting Robosats!')

  /**
   * ======================== Additional Health Checks (optional) ========================
   *
   * In this section, we define *additional* health checks beyond those included with each daemon (below).
   */
  const healthReceipts: T.HealthCheck[] = []

  const robosatsSub = await sdk.SubContainer.of(
    effects,
    { imageId: 'robosats' },
    sdk.Mounts.of().addVolume('main', null, '/root', false),
    'robosats-sub',
  )

  await robosatsSub.exec(['chmod a+x /usr/local/bin/*.sh'])
  await robosatsSub.exec(['chmod a+x *.sh'])

  /**
   * ======================== Daemons ========================
   *
   * In this section, we create one or more daemons that define the service runtime.
   *
   * Each daemon defines its own health check, which can optionally be exposed to the user.
   */
  return sdk.Daemons.of(effects, started, healthReceipts).addDaemon('primary', {
    subcontainer: robosatsSub,
    command: ['./robosats-client.sh'],
    env: {
      APP_HOST: 'robosats.startos',
      APP_PORT: '12596',
      TOR_PROXY_IP: 'startos',
      TOR_PROXY_PORT: '9050',
    },
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
