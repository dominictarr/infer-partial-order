

function union (a, b) {
  if(b == null) return a
  var c = []
  b.forEach(function (v) {
    if(~a.indexOf(v)) c.push(v)
  })
  return c.sort()
}

function remove(ary, v) {
  var i = ary.indexOf(v)
  if(~i) ary.splice(i, 1)
  return ary
}

function clean (order) {
  var newOrder = {}
  for(var key in order) {
    var after = order[key]

    //remove all the items that the are indirectly before key.
    var direct = after.slice()
    after.forEach(function (k) {
      order[k].forEach(function (v) {
        remove(direct, v)
      })
    })
    newOrder[key] = direct
  }
  return newOrder
}

module.exports = function (examples, doClean) {

  var order = {}
  examples.forEach(function (seq, i) {
    var seen = []
    seq.forEach(function (value) {
      console.log(value, '->', order[value] || [])
      console.log('seen', seen)
      order[value] = union(seen.slice(), order[value])
      seen.push(value)
    })
    if(order) return
  })

  if(doClean)
    return clean(order)

  return order
}

module.exports.canonical = clean
