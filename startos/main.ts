import { sdk } from './sdk'

export const main = sdk.setupMain(async ({ effects, started }) => {
  /**
   * ======================== Setup (optional) ========================
   *
   * In this section, we fetch any resources or run any desired preliminary commands.
   */
  console.info('Starting Robosats!')

  /**
   * ======================== Daemons ========================
   *
   * In this section, we create one or more daemons that define the service runtime.
   *
   * Each daemon defines its own health check, which can optionally be exposed to the user.
   */
  return sdk.Daemons.of(effects, started).addDaemon('primary', {
    subcontainer: await sdk.SubContainer.of(
    effects,
    { imageId: 'robosats' },
    sdk.Mounts.of().mountVolume({
      volumeId: 'main',
      subpath: null,
      mountpoint: '/root',
      readonly: false,
    }),
    'robosats-sub',
  ),
    exec: {
      command: sdk.useEntrypoint(),
      env: {
        // APP_HOST: 'robosats.startos',
        // APP_PORT: String(port),
        // TOR_PROXY_IP: 'startos',
        // TOR_PROXY_PORT: '9050',
      },
    },
    ready: {
      display: 'Web Interface',
      fn: () =>
        sdk.healthCheck.checkWebUrl(effects, 'http://robosats.startos:12596/selfhosted', {
          successMessage: 'The web interface is ready',
          errorMessage: 'The web interface is not ready',
        }),
    },
    requires: [],
  })
})
