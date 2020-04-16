//property-manage.js
var apple = { color : 'Red', name : 'Apple' };

console.log(apple.name); 

apple.price = 10000;
console.log("price" in apple);
delete apple.name
console.log("name" in apple);
