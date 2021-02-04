const { resolve } = require('path');
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
            emitCss: false,
            // TODO: Add this when storybook update the svelte-loader to 3.0.0
            // compileOptions: {
            //   css: false,
            //   immutable: true
            // }
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
    new HtmlWebpackPlugin({ template: './src/index.html' })
  ]
};