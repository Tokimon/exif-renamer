const { resolve } = require('path');


const nodeBuiltIns = require('module').builtinModules;

console.log(`/(${nodeBuiltIns.join('|')})/`, '\n\n');


module.exports = {
  target: 'electron-renderer',
  entry: {
    main: './src/server.ts',
    preload: './src/preload.ts'
  },
  output: {
    path: resolve('build'),
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
      '~/': resolve('src')
    },
    fallback: {
      path: 'empty',
      fs: 'empty'
    }
    // fallback: require('module').builtinModules.reduce((o, key) => {
    //   o[key] = false;
    //   return o;
    // }, {})
  },
  performance: {
    hints: 'warning'
  },
  module: {
    // noParse: (content) => {
    //   const ok = new RegExp(`(${nodeBuiltIns.join('|')})`).test(content);
    //   if (ok) { console.log(content, '\n\n'); }
    //   return ok;
    // }, //new RegExp(`\b(${nodeBuiltIns.join('|')})\b`),
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