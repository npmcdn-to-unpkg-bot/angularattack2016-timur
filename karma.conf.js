// karma.conf.js
module.exports = config => {
  config.set({
    frameworks: ['browserify', 'mocha', 'chai'],

    // paths loaded by Karma
    paths: [
      {pattern: 'jspm_packages/system.js', included: true, watched: true},
      {pattern: 'jspm_packages/jspm.browser.js', included: true, watched: true},
      {pattern: 'jspm_packages/jspm.config.js', included: true, watched: true},

      {pattern: 'dist/**/*.js', included: false, watched: true},

      {pattern: 'dist/test/**/*.js.map', included: false, watched: false}
    ],

    files: [
      'dist/test/**/*.js'
    ],

    preprocessors: {
      'dist/test/**/*.js': ['browserify']
    },

    browsers: ['Chrome']
  })
}
