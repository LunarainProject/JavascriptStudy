//function-literal.js
function foo() {
    var sq = function(x) { return x * x; };
    var cu = function cube(x) { return x * x * x; };
    console.log(sq(3), cu(3));
}

foo();
//console.log(cube); <- error
