const appConstants = require('./src/constants');

const {PHASE_DEVELOPMENT_SERVER} = require('next/constants')

module.exports = (phase, defaultConfig) => {
  const appConfig = {
    cssModules: true,
    serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: 'secret',
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: '/static',
      siteUrl: 'http://chrishardcastle.co.uk',
      visibleExperiences:
        [
          appConstants.EAGLE_EYE_SOLUTIONS,
          appConstants.THIRD_BRIDGE,
        ]
    },
  };

  console.log(`Detected ${phase}`);

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // development only config options here
    appConfig.publicRuntimeConfig.siteUrl = 'http://somethingelse.com';
    console.log(`Set local`);
  }

  const config = Object.assign({}, defaultConfig, appConfig);
  console.log(config);
  return config;
}
