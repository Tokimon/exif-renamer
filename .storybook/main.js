const { resolve } = require('path');

module.exports = {
  stories: ['../src/**/*.stories.js'],
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules.push(
      process.cwd(),
      resolve('src')
    );

    config.module.rules.unshift(
      {
        test: /[\\/]svg[\\/]icons[\\/].*\.svg(\?.*)?$/,
        use: ['svg-sprite-loader']
      },

      {
        test: /[\\/]svg[\\/]inline[\\/].*\.svg(\?.*)?$/,
        use: ['svg-inline-loader']
      }
    );

    config.module.rules[config.module.rules.length - 2].test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/

    // console.log(config.module.rules);

    // Return the altered config
    return config;
  }
};
