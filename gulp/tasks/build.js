/**
 * Created by timur on 5/14/16.
 */


const gulp = require('gulp'),
  babel = require('gulp-babel'),
  changed = require('gulp-changed'),
  gutil = require('gulp-util'),
  paths = require('../paths')

gulp.task('build', () => {

  gutil.log(gutil.colors.magenta(`transpiling src to dist...`))

  return gulp.src(paths.source)
    .pipe(changed(paths.dist))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(paths.dist))

})