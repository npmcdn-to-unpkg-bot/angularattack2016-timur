// karma.conf.js
module.exports = config => {
  config.set({
    frameworks: ['browserify', 'mocha', 'chai'],

    files: [
      'test/**/*.js'
    ],

    reporters: ['nyan'],

    preprocessors: {
      // source files, that you wanna generate coverage for
      // do not include tests or libraries
      // (these files will be instrumented by Istanbul)
      'test/**/*.js': ['browserify']
    },

    browsers: ['Chrome']
  })
}
