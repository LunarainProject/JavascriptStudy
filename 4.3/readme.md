# 객체 생성자

## 생성자

함수를 이용하여 객체를 생성할 수 있습니다.  
생성자를 이용하여 객체를 생성할 때에는 `new`연산자를 이용합니다.  

```javascript
//constructor.js
function Point(x, y) {
    this.x = x;
    this.y = y;
}

let pt = new Point(3, 5);
console.log(pt.x, pt.y)
```

위의 예시와 같이 `new`를 통해서 객체를 만들 것이라고 기대하고 만든 함수를
`생성자`라고 합니다. 생성자 안에서 `this.프로퍼티이름`에 값을 대입하면 그 이름을 가진 
프로퍼티에 값이 할당된 객체가 생성됩니다. `this`는 앞서 설명했듯이 객체 자체를 의미합니다.

생성자 자체도 함수 객체이기 때문에 클래스의 개념 자체가 없기 때문에 엄밀하지는 않지만, 
생성자가 생성한 객체를 `인스턴스`라고 부르는 것이 관례입니다.

생성자는 생성자임을 알리기 위하여 첫 글자를 대문자로 쓰는 것이 관례입니다. (`PascalCase`) (보통 일반 함수의 경우는 `camelCase`로 씀.)

생성자는 메서드를 가진 객체를 생성할 수 있습니다.

```javascript
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
```

### 출력 결과

```
Area = 28.274333882308138
```