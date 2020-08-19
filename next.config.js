const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const path = require('path');

const defaultConfigXxx = {
  cssModules: true,
  serverRuntimeConfig: {
    // Will only be available on the server side
    mySecret: 'secret',
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     '/about': { page: '/about' },
  //     '/p/hello-nextjs': { page: '/post', query: { title: 'hello-nextjs' } },
  //     '/p/learn-nextjs': { page: '/post', query: { title: 'learn-nextjs' } },
  //     '/p/deploy-nextjs': { page: '/post', query: { title: 'deploy-nextjs' } },
  //   }
  // },
}


module.exports = (phase, defaultConfig ) => {
  const appConfig = {
    cssModules: true,
    serverRuntimeConfig: {
      // Will only be available on the server side
      mySecret: 'secret',
    },
    publicRuntimeConfig: {
      // Will be available on both server and client
      staticFolder: '/static',
    },
  };

  console.log(`Phase is ${phase}`);
  const envVars = {};
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /* development only config options here */
    // envVars.assetPrefix = `${path.join(__dirname)}`;

    console.log('local!');
  }

  const config = Object.assign({}, defaultConfig, appConfig, envVars);
  console.log(config);
  return config;
}
