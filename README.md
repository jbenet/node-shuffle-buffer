# shuffle-buffer

Shuffles your buffers.

## Example

```js
> var shuffle = require('buffer-shuffle')
> var buf1 = new Buffer('abcdefg')
> var buf2 = shuffle(buf1)
> console.log(buf2.toString())
fbgdaec
```
