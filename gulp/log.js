/**
 * Created by timur on 5/14/16.
 */

const gutil = require('gulp-gutil')

function log(message) {
  gutil.log(gutil.colors.blue(message))
}

module.exports({ log })
