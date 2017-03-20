#!/usr/bin/env node
const co = require('co');
const removeDuplets = require('../lib/removeDublets');
co(removeDuplets(process.cwd()))
  .then((files) => console.log(`${files.length} Duplets moved to "__duplets" folder`));
