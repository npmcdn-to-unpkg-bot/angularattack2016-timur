/**
 * Created by timur on 5/14/16.
 */

const path = require('path')

const source = path.join(__dirname, '..', 'src/**/*.js')
const dist = path.join(__dirname, '..', 'lib')

module.exports = {
  source,
  dist
}

