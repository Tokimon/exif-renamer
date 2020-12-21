const { resolve } = require('path');



module.exports = {
  entry: './src/electron/main.ts',
  output: {
    path: resolve('build/server'),
    filename: '[name].js',
    libraryTarget: 'commonjs'
  },
  mode: 'development',
  stats: 'minimal',
  node: false,
  resolve: {
    extensions: ['.ts', '.js'],
    mainFields: ['module', 'main'],
    alias: {
      '@': resolve('src')
    },
    // fallback: {
    //   path: require.resolve('path')
    // }
    // fallback: require('module').builtinModules.reduce((o, key) => {
    //   o[key] = false;
    //   return o;
    // }, {})
  },
  performance: {
    hints: 'warning'
  },
  module: {
    noParse: new RegExp(require('module').builtinModules.join('|')),
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: resolve('tsconfig-electron.json')
          }
        }
      }
    ]
  }
};