//object-is-reference-type.js
var a = { x : 30, y : 10};
var b = a;

a.x = 10;
console.log(b.x, b.y);