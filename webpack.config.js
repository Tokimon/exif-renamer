const { resolve } = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: 'index.js',
  output: {
    path: resolve('./public'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.svelte'],
    mainFields: ['svelte', 'module', 'main', 'browser'],
    modules: [process.cwd(), resolve('src')]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Exif renamer'
    })
  ],
  module: {
    rules: [
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            emitCss: false
          }
        }
      },

      {
        test: /[\\/]svg[\\/]icons[\\/].*\.svg(\?.*)?$/,
        use: ['svg-sprite-loader']
      },

      {
        test: /[\\/]svg[\\/]inline[\\/].*\.svg(\?.*)?$/,
        use: ['svg-inline-loader']
      }
    ]
  }
};
