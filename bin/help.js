#!/usr/bin/env node

/**
 * Module dependencies.
 */
var prompt = require('prompt');

/**
 * Functions
 */


var confirm = function(callback) {
  var schema = {
    properties: {
      confirm: {
        pattern: /^[yYnN]$/,
        message: 'Please Enter Yes (y) or No (n)',
        required: true
      }
    }
  };

  prompt.start();
  console.log("Do you want to continue? Yes (y) / No (n)");
  prompt.get(schema, function (err, status) {
    if(status.confirm.toLowerCase() == "y"){
      callback();
    } else {
      console.log("Aborted...");
    }
  });
}

module.exports.confirm = confirm;
