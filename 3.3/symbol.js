//symbol.js
var sym1 = Symbol();
var sym2 = Symbol();
var sym3 = Symbol('paxbun');

console.log(sym1 == sym2) //false
console.log(sym3.toString()); //Symbol(paxbun)

var a = Symbol.for('hello')
var b = Symbol.for('hello')
var c = Symbol.for('bye')
var d = Symbol('bye')

console.log(a == b, b == c)   //true false
console.log(Symbol.keyFor(c)) //bye
console.log(Symbol.keyFor(d)) //undefined
