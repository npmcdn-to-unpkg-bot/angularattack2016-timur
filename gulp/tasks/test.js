/**
 * Created by timur on 5/14/16.
 */

const gulp = require('gulp'),
  mocha = require('gulp-mocha'),
  gutil = require('gulp-util'),
  paths = require('../paths')

gulp.task('test', ['build'], () => {
  return gulp.src(paths.test)
  // gulp-mocha needs filepaths so you can't have any plugins before it
    .pipe(mocha({
      reporter: 'nyan'
    }))
    .on('error', handleError)
})

function handleError(err) {
  gutil.log(gutil.colors.magenta(err.toString()))
  this.emit('end')
}
