const { resolve } = require('path');
const webpack = require('webpack');
const { typescript: svelteTS } = require('svelte-preprocess');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const tsConfigFile = resolve('tsconfig-web.json');

module.exports = {
  entry: './src/web.ts',
  output: {
    path: resolve('renderer'),
    filename: '[name].[contenthash].js'
  },
  mode: 'development',
  stats: 'minimal',
  resolve: {
    extensions: ['.svelte', '.ts', '.js'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    alias: {
      svelte: resolve('node_modules', 'svelte'),
      '~': resolve('src')
    }
  },
  devtool: 'source-map',
  performance: {
    hints: 'warning'
  },
  node: {
    global: false
  },
  module: {
    rules: [
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
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: [
              svelteTS({ tsconfigFile: tsConfigFile })
            ],
            emitCss: false
          }
        }
      },
      {
        test: /[\\/]svg[\\/]inline[\\/].*\.svg(\?.*)?$/,
        use: 'svg-inline-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new webpack.DefinePlugin({
      global: 'window'		// Placeholder for global used in any node_modules
    })
  ]
};