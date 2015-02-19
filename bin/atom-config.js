#!/usr/bin/env node

/**
 * Module dependencies.
 */
var program = require('commander');
var packages = require('./packages');

/**
 * Init.
 */
var version = "0.1.4";

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

program
  .command('save [filename]')
  .description('remove all installed packages in Atom')
  .action(function(filename){
    if(typeof(filename) === "undefined") {
      console.log("Using default filename: atom.config");
      filename = "atom.config";
    }
    packages.save(filename);
});

program.version(version);

console.log('Atom Configuration Tool version %s',version);

program.parse(process.argv);

if (!program.args.length) program.help();
