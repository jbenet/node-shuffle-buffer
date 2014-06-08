var shuffle = require('./')
var buf1 = new Buffer('abcdefg')
var buf2 = shuffle(buf1)
console.log(buf2.toString())
