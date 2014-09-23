/*
 * grunt-file-exist
 *
 *
 * Copyright (c) 2014 HAKASHUN
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // load all npm grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Configuration to be run (and then tested).
    file_exist: {
      options: {
        output: 'tmp/log.txt'
      },
      card: {
        options: {
          patterns: ['l.png', 'm.png', 's.png'],
          detail: true
        },
        src: [
          'test/fixtures/card/*/'
        ]
      },
      character: {
        options: {
          patterns: ['real/l.png', 'real/m.png', 'real/s.png', 'real/body.png'],
          detail: false
        },
        src: [
          'test/fixtures/character/*'
        ]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'file_exist', 'nodeunit']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test']);

};
