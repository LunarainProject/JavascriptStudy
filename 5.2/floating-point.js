//floating-point.js
console.log(Math.sqrt(10001)-Math.sqrt(10000)); //권장하지 않음

a = 0.16;
b = 0.2;
console.log(a / b == 0.8);  //→ false
console.log(Math.abs(a / b - 0.8) < 1e-10);  //->True
