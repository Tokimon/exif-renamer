const { resolve } = require('path');
const { typescript: svelteTS } = require('svelte-preprocess');

const tsConfigFile = resolve('tsconfig-web.json');

module.exports = {
  stories: [resolve('src/**/*.stories.ts')],
  addons: [
    // '@storybook/addon-docs',
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

    config.module.rules.forEach((rule) => {
      const { source } = rule.test;
      if (source.includes('tsx?')) {
        rule.test = new RegExp(source.replace('tsx?', 'tsx'));
      }
    });


    if (svelteRule) {
      svelteRule.options = {
        emitCss: false,
        hotReload: false, // setting to true will result in the error: "Cannot read property '_debugName' of undefined"
        hotOptions: {
          // List of options and defaults: https://www.npmjs.com/package/svelte-loader-hot#usage
          noPreserveState: true,
          optimistic: false
        },
        // TODO: Add this when storybook update the svelte-loader to 3.0.0
        // compileOptions: {
        //   css: false,
        //   immutable: true
        // },
        preprocess: [
          svelteTS({ tsconfigFile: tsConfigFile })
        ]
      };
    }


    config.resolve.modules.push(
      process.cwd(),
      resolve('src')
    );

    config.module.rules.push(
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: tsConfigFile
          }
        },
        exclude: /node_modules/
      },
      {
        test: /[\\/]svg[\\/]inline[\\/].*\.svg(\?.*)?$/,
        use: 'svg-inline-loader'
      }
    );

    if (imageRule) {
      imageRule.test = /\.(ico|jpg|jpeg|png|gif)(\?.*)?$/;
    }

    config.resolve.alias['~'] = resolve('src');

    // console.log(require('util').inspect(config.module.rules, false, 10, true));
    // console.log(config);
    // console.log(config.resolve);



    // Return the altered config
    return config;
  }
};
