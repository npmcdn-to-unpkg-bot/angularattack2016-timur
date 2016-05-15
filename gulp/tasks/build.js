/**
 * Created by timur on 5/14/16.
 */

const gulp = require('gulp'),
  babel = require('gulp-babel'),
  tsc =require('gulp-typescript'),
  changed = require('gulp-changed'),
  gutil = require('gulp-util'),
  paths = require('../paths')

gulp.task('build', ['pipe-html'], () => {

  gutil.log(gutil.colors.magenta('building app to dist...'))

  return gulp.src(paths.source)
    .pipe(changed(paths.dist))
    .pipe(tsc({
      isolatedModules: true,
      target: 'ES6'
    }))
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest(paths.dist))

})

gulp.task('pipe-html', () => {

  gutil.log(gutil.colors.magenta('piping html files to dist...'))
  
  return gulp.src(paths.source_html)
    .pipe(gulp.dest(paths.dist))

})
