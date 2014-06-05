

var tape = require('tape')

var infer = require('../')
var A = 'A', B = 'B', C = 'C', D = 'D', E = 'E', F = 'F'

tape('trivial', function (t) {

  var partial = infer([[A,B,C], [B,A,C]])

  console.log(partial)

  t.deepEqual(partial, {A:[], B:[], C:[A,B]})
  t.end()
})


tape('2 level', function (t) {
  var sequences = [
    [A,B,C,D,E],
    [B,A,D,C,E],
    [A,B,C,D,E],
  ]
  var partial = infer(sequences)

  console.log(partial)

  t.deepEqual(partial, {A:[], B:[], C:[A,B], D:[A,B], E: [A,B,C,D]})

  t.deepEqual(infer.canonical(partial),
    {A:[], B:[], C:[A,B], D:[A,B], E: [C,D]})
  t.deepEqual(infer(sequences, true),
    {A:[], B:[], C:[A,B], D:[A,B], E: [C,D]})

  t.end()
})


