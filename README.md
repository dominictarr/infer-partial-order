# infer-partial-order

infer the partial order of a set from a set of examples.

say we have two sequences `A, B, C` and `B, A, C`.
Here `A < C` and `B < C`, but sometimes `B == A`.
This relationship is obvious, because there are only 3 items,
but as the number of items increase, it's much less clear.

represent a partial ordering like this:
``` js
{
  A:[],
  B:[],
  C:[A, B]
}
```

Each key maps to the list of items that always come before it.


## License

MIT
