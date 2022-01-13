const { resolve } = require('path');
const { svelte } = require('@sveltejs/vite-plugin-svelte');
const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  stories: [resolve('src/**/*.stories.@(ts|svelte)')],
  addons: ['@storybook/addon-essentials', '@storybook/addon-svelte-csf'],
  core: {
    builder: 'storybook-builder-vite',
  },
  async viteFinal(config) {
    const { default: viteConfig } = await import('../vite.config.js');

    const svelteIndex = config.plugins.findIndex(
      ({ name }) => name === 'vite-plugin-svelte'
    );

    config.plugins[svelteIndex] = svelte({
      preprocess: [sveltePreprocess()],
    });

    // customize the Vite config here
    config.resolve.alias = viteConfig.resolve.alias;

    // return the customized config
    return config;
  },
};
