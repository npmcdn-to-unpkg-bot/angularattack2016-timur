/**
 * Created by timur on 5/14/16.
 */

const gulp = require('gulp'),
  paths = require('../paths')

gulp.task('watch', ['build', 'test'], () => {
  gulp.watch(paths.source_all, ['test'])
})
