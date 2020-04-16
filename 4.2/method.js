//method.js
let circle = {
    center : { x:1, y:1 },
    radius : 3.5,
    area : function () {
        return Math.PI * this.radius * this.radius;
    }
};
console.log(circle.area());
