#!/usr/bin/env node
const co = require('co');
const renamer = require('../lib/renamer');
co(renamer(process.cwd()));
