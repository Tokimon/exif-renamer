const configElectron = require('./webpack.electron.config');
const configSvelte = require('./webpack.svelte.config');

module.exports = [
  configElectron,
  configSvelte
];