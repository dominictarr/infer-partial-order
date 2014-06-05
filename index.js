

function union (a, b) {
  if(b == null) return a
  var c = []
  b.forEach(function (v) {
    if(~a.indexOf(v)) c.push(v)
  })
  return c.sort()
}

module.exports = function (examples) {

  var order = {}
  examples.forEach(function (seq, i) {
    var seen = []
    console.log(order)
    seq.forEach(function (value) {
      order[value] = union(seen.slice(), order[value])
      seen.push(value)
    })
    if(order) return
  })
  return order
}
