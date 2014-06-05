# infer-partial-order

infer the partial order of a set from a set of examples.

say we have two sequences `A, B, C` and `B, A, C`.
Here `A < C` and `B < C`, but sometimes `B == A`.
This relationship is obvious, because there are only 3 items,
but as the number of items increase, it's much less clear.

## Example

represent a partial ordering like this:
``` js
var infer = require('infer-partial-order')

infer([ [A, B, C], [B, A, C] ])

=> {
  A:[],
  B:[],
  C:[A, B]
}
```

Each key maps to the list of items that always come before it.

for more complex cases, you might want to use the canonical mode,
it strips out items that are indirectly lesser than a given item.
This is still enough information to build a graph of the order
relationships.
``` js
var infer = require('infer-partial-order')

infer([ [A, B, C, D, E], [B, A, D, C, E], [A, B, C, D, E])

=> {
  A:[],
  B:[],
  C:[A, B],
  D:[A, B],
  E:[C, D]
}
```



## License

MIT
