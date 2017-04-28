#!/usr/bin/env node
const co = require('co');
const removeDuplets = require('../lib/removeDublets');
co(removeDuplets(process.cwd()));
