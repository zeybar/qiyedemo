const _ = require('lodash')

module.exports = {
  add: function(a, b) {
    console.log(_.random(100))
    return a + b;
  }
}