#!/usr/bin/env node

/**
 * Module dependencies.
 */
var program = require('commander');
var list = require('./list');

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
    list.getList();
});


program.version(version);

console.log('Atom Configuration Tool version %s',version);

program.parse(process.argv);

if (!program.args.length) program.help();
