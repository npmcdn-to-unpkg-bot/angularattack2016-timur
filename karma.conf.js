// karma.conf.js
module.exports = config => {
  config.set({
    frameworks: ['browserify', 'mocha', 'chai'],

    files: [
      'dist/test/**/*.js'
    ],

    preprocessors: {
      'dist/test/**/*.js': ['browserify']
    },

    browsers: ['Chrome']
  })
}
