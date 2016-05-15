/**
 * Created by timur on 5/14/16.
 */

const gulp = require('gulp'),
  babel = require('gulp-babel'),
  tsc = require('gulp-typescript'),
  changed = require('gulp-changed'),
  gutil = require('gulp-util'),
  sass = require('gulp-sass'),
  paths = require('../paths')

gulp.task('build', ['ts', 'html', 'sass'])

gulp.task('ts', () => {

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

gulp.task('html', () => {

  gutil.log(gutil.colors.magenta('piping html files to dist...'))

  return gulp.src(paths.source_html)
    .pipe(changed(paths.dist))
    .pipe(gulp.dest(paths.dist))
})

gulp.task('sass', () => {

  gutil.log(gutil.colors.magenta('preprocessing sass files to dist...'))

  return gulp.src(paths.source_sass)
    .pipe(changed(paths.dist))
    .pipe(sass()
      .on('error', sass.logError))
    .pipe(gulp.dest(paths.dist))
})
