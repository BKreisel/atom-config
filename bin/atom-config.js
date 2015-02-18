#!/usr/bin/env node

/**
 * Module dependencies.
 */
var program = require('commander');

/**
 * Init.
 */
var version = "0.1.0"

/**
 * Config.
 */
program
  .version(version)
  .command('export [filename]', "export installed packages")
  .command('list', 'list packages installed')
  .parse(process.argv);


/**
 * Do Work
 */

console.log('Atom Configuration tool version %s',version);
