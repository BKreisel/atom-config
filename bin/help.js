#!/usr/bin/env node

/**
 * Module dependencies.
 */
var sys = require('sys');

/**
 * Functions
 */
var print = function(error, stdout, stderr) {
   sys.puts(stdout);
}

module.exports.print = print;
