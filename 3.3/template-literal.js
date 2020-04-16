//template-literal.js
var a = `I'm happy
             today.`
var b = "I'm happy\ntoday."
var c = String.raw`I'm happy\ntoday.`

console.log(a)
console.log(b)
console.log(c)

var d = 10
var e = 12
console.log(`d : ${d}, e : ${e}, d+e : ${d+e}`)
