#!/usr/bin/env node

require('babel-register');
require('babel-polyfill');
const renamer = require('./lib/rename').renamer;

renamer(process.cwd());
