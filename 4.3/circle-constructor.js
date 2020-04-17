//circle-constructor.js
function Circle(center, radius) {
    this.center = center;
    this.radius = radius;
    this.area = function() {
        return Math.PI * this.radius * this.radius;
    }
}
let point = {x:0, y:0}
let c = new Circle(point, 3);
console.log("Area = " + c.area());
