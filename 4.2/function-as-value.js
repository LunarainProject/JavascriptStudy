//function-as-value.js
function cube(x) { return x * x * x; }
var cu = cube;
console.log(cu(2)); //8
