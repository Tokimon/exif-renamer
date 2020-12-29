const { resolve } = require('path');
const webpack = require('webpack');
const sveltePreprocess = require('svelte-preprocess');
const HtmlWebpackPlugin = require('html-webpack-plugin');

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
            configFile: resolve('tsconfig-web.json')
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
            // @ts-ignore
            preprocess: sveltePreprocess(),
            emitCss: false
          }
        }
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