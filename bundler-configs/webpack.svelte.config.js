const { resolve } = require('path');
const sveltePreprocess = require('svelte-preprocess');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: resolve('build/web'),
    filename: '[name].[contenthash].js'
  },
  mode: 'development',
  stats: 'minimal',
  resolve: {
    extensions: ['.svelte', '.ts', '.js'],
    mainFields: ['svelte', 'browser', 'module', 'main'],
    alias: {
      svelte: resolve('node_modules', 'svelte'),
      '@': resolve('src')
    }
  },
  performance: {
    hints: 'warning'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svelte$/,
        exclude: /node_modules/,
        use: {
          loader: 'svelte-loader',
          options: {
            preprocess: sveltePreprocess(),
            emitCss: false
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};