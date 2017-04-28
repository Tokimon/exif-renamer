#!/usr/bin/env node
const co = require('co');
const chalk = require('chalk');

const removeDuplets = require('../lib/removeDublets');
co(removeDuplets(process.cwd()));
