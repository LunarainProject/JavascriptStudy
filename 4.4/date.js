//date.js
let now = new Date();
console.log(now);

let then = new Date(2018, 1, 1);
let elapsed = now - then; // millisecond unit
console.log(elapsed);
console.log(now.getFullYear(), now.getMonth(), now.getDay());
