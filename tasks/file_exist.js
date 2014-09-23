/*
 * grunt-file-exist
 *
 *
 * Copyright (c) 2014 HAKASHUN
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks
  var output = '';
  var log = grunt.log;
  var report = function(memo) {
    output += memo + '\n';
  };
  var globalOptions = grunt.config.get('file_exist').options || {};
  var outputPath = (globalOptions.output) ? globalOptions.output : 'reports/log.txt';

  grunt.registerMultiTask('file_exist', 'The best Grunt plugin ever.', function () {
    var _ = require('lodash');
    var chalk = require('chalk');
    var files = this.filesSrc;

    var options = this.options({
      detail: false
    });

    log.writeln('------------------------------------------------------');
    files.forEach(function(filepath){
      if(!grunt.util._.endsWith(filepath, '/')) {
        filepath += '/';
      }

      var hasError = false;
      var count = {
        error: 0,
        success:0
      };
      var errorPatterns = [];
      options.patterns.forEach(function(pattern){
        var path = filepath + pattern;
        if(!grunt.file.exists(path)) {
          hasError = true;
          count.error++;
          errorPatterns.push(pattern);
        } else {
          count.success++;
        }
      });

      var title = '';
      if(hasError) {
        title += chalk.red('✖ ');
      } else {
        title += chalk.green('✔ ');
      }
      title += filepath;
      // start output logs
      log.writeln(title);

      // only detail option logs
      if(options.detail){
        log.writeln('  ' + chalk.green('Success') + ': ' + count.success, chalk.red('Error') + ': ' + count.error);
      }

      // output notfound items
      if(hasError) {
        report(filepath);
        _.forEach(errorPatterns, function(path){
          var errorMsg = '  => ' + path;
          report(errorMsg);
          log.writeln(errorMsg);
        });
      }
      log.writeln('------------------------------------------------------');
    });
  });

  // write log
  grunt.file.write(outputPath, output);
};
