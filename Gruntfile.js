'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// If you want to recursively match all subfolders, use:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      gruntfile: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['src/{,*/}*.scss'],
        tasks: ['compass'],
      },
      styles: {
        files: ['css/{,*/}*.css'],
        tasks: ['copy:styles']
      }
    },

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      dist: {
        options: {
          sassDir: 'src',
          cssDir: 'css',
          environment: 'production',
          outputStyle: 'compressed',
          relativeAssets: true,
          noLineComments: true,
          force: true
        }
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      styles: {
        expand: true,
        dot: true,
        cwd: 'css',
        dest: 'scss/',
        src: '{,*/}*.css',
        rename: function(dest, src) {
          var tmp = src.replace('.css','.scss');
          return dest + tmp.replace('trianglejuice','_trianglejuice');
        }
      }
    }

  });

  grunt.registerTask('default', [
    'watch',
    // 'copy'
  ]);
};
