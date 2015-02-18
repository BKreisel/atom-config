#!/usr/bin/env node

/**
 * Module dependencies.
 */

var exec = require('child_process').exec;
var helpers = require('./help');

/**
 * Functions
 */

var list = function() {
 console.log("Installed Packages:");
 exec("apm list -i", helpers.print);
}

module.exports.list = list;
