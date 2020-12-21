const { resolve } = require('path');
const pckg = require('./package.json');
const { builtinModules } = require('module');



const installDest = '__modules__';



module.exports = {
  mount: {
    src: '/src',
    public: '/'
  },

  plugins: [
    '@snowpack/plugin-svelte',
    '@snowpack/plugin-typescript',
    [
      '@snowpack/plugin-webpack',
      {
        extendConfig: (config) => {
          config.resolve.alias[installDest] = resolve(installDest);
          config.output.filename = 'public/[name].[contenthash].js';
          return config;
        }
      }
    ]
  ],

  installOptions: {
    dest: installDest,
    externalPackage: [
      ...builtinModules,
      ...Object.keys(pckg.devDependencies)
    ]
  },

  buildOptions: {
    webModulesUrl: installDest,
    clean: true
  },

  alias: {
    '@': './src'
  }
};