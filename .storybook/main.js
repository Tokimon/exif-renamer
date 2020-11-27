const { resolve } = require('path');
const SveltePreprocess = require('svelte-preprocess');



module.exports = {
  stories: [resolve('src/**/*.stories.ts')],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-controls'
  ],
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
        test: /[\\/]svg[\\/]inline[\\/].*\.svg(\?.*)?$/,
        use: ['svg-inline-loader']
      },
      {
        test: /[\\/]svg[\\/]icons[\\/].*\.svg(\?.*)?$/,
        loader: 'svg-sprite-loader',
        options: {
          spriteFilename: 'icons.svg',
          // extract: true
        }
      }
    );

    if (imageRule) {
      imageRule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/;
    }

    config.resolve.alias['~'] = resolve('src');

    // console.log(config.module.rules);
    // console.log(config);
    // console.log(config.resolve);



    // Return the altered config
    return config;
  }
};
