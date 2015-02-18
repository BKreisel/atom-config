#!/usr/bin/env node

/**
 * Module dependencies.
 */
var program = require('commander');
var packages = require('./packages');

/**
 * Init.
 */
var version = "0.1.0";

/**
 * Config.
 */

program
  .command('list')
  .description('list currently installed packages')
  .action(function(){
    packages.list();
});

program
  .command('clean')
  .description('remove all installed packages in Atom')
  .action(function(){
    packages.clean();
});


program.version(version);

console.log('Atom Configuration Tool version %s',version);

program.parse(process.argv);

if (!program.args.length) program.help();
