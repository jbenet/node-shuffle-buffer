var _ = require('underscore')

module.exports = function(buf) {
  if (!(buf instanceof Buffer))
    throw new Error('buf should be a Buffer')

  return new Buffer(_.shuffle(buf.toJSON()))
}
