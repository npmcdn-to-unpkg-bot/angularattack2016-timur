/**
 * Created by timur on 5/14/16.
 */

// karma.conf.js
module.exports = function (config) {
  config.set({
    frameworks: ['browserify', 'mocha', 'chai'],

    files: [
      'dist/test/**/*.js'
    ],

    client: {
      mocha: {
        reporter: 'html', // change Karma's debug.html to the mocha web reporter
        ui: 'bdd'
      }
    },

    preprocessors: {
      'dist/test/**/*.js': ['browserify']
    },

    browsers: ['Chrome']
  });
};
