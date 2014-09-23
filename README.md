# grunt-file-exist

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-file-exist --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-file-exist');
```

## The "file_exist" task

### Overview
In your project's Gruntfile, add a section named `file_exist` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  file_exist: {
    options: {
      output: 'reports/log.txt'
    },
    your_target: {
      options: {
        patterns: ['l.png', 'm.png', 's.png']
      },
      src: [
        'img/thumbs/*/'
      ]
    },
  },
})
```

### Options

#### options.patterns
Type: `Array`

Pattern names of your files you want to check.

#### options.detail
Type: `Boolean`
Default value: `false`

Whether or not to display the details of the check result.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2014 HAKASHUN. Licensed under the MIT license.
