var shuffle = require('lodash.shuffle')

module.exports = function(buf) {
  if (!(buf instanceof Buffer))
    throw new Error('buf should be a Buffer')

  return new Buffer(shuffle(buf.toJSON()))
}
