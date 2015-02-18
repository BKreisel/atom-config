#!/usr/bin/env node

/**
 * Module dependencies.
 */

var exec = require('child_process').exec;
var helpers = require('./help');
var sys = require('sys');

/**
 * Functions
 */

var list = function() {
 console.log("\nInstalled Packages:\n");
 exec("apm list -i -b",function(error, stdout, stderr) {
   console.log(stdout);
 });
}

var clean = function() {
 console.log("\n Clean:\n");
 console.log("Warning:This function will delete all Installed Packages\n");

 helpers.confirm(function() {
   exec("apm list -i -b", function(error,stdout,stderror) {
     console.log("\nCleaning... \n");
     var packages = stdout.split("\n");
     for (var i = 0, len = packages.length; i < len; i++) {
       var package = packages[i].substring(0,packages[i].indexOf("@"));
       packages[i] = package;
     }
     cmd = "apm delete " + packages.join(" ");
     exec(cmd,function(error,stdout,stderror) {
       console.log(stdout);
       console.log("Cleaned...");
     });
   });
 });
}




module.exports.list = list;
module.exports.clean = clean;
