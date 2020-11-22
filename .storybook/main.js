const { resolve } = require('path');
const SveltePreprocess = require('svelte-preprocess');



module.exports = {
  stories: [resolve('src/**/*.stories.ts')],
  addons: ['@storybook/addon-actions'],
  webpackFinal: async (config, { configType }) => {
    const svelteRule = config.module.rules.find(
      (rule) => rule.test.source.includes('svelte')
    );

    const imageRule = config.module.rules.find(
      (rule) => rule.test.source.includes('jpeg')
    );

    if (svelteRule) {
      svelteRule.options = {
        emitCss: false,
            hotReload: false,
            hotOptions: {
              // List of options and defaults: https://www.npmjs.com/package/svelte-loader-hot#usage
              noPreserveState: true,
              optimistic: false
            },
            preprocess: SveltePreprocess({})
      }
    }


    config.resolve.modules.push(
      process.cwd(),
      resolve('src')
    );

    config.module.rules.push(
      {
        test: /[\\/]svg[\\/]icons[\\/].*\.svg(\?.*)?$/,
        use: ['svg-sprite-loader']
      },

      {
        test: /[\\/]svg[\\/]inline[\\/].*\.svg(\?.*)?$/,
        use: ['svg-inline-loader']
      }
    );

    if (imageRule) {
      imageRule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;
    }

    config.resolve.alias['~'] = resolve('src');

    // console.log(config.module.rules);
    // console.log(config.resolve);



    // Return the altered config
    return config;
  }
};
