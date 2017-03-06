#!/usr/bin/env node
const co = require('co');
const removeDuplets = require('../lib/removeDuplets');
co(removeDuplets(process.cwd()))
  .then(() => console.log('Duplets moved to "__duplets" folder'));
