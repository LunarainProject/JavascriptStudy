
# 배열

## 리털로 배열 생성하기  

배열은 타 언어와 생성법이 거의 다르지 않습니다.  
변수의 요소에는 변수와 마찬가지로 모든 타입의 값이 올 수 있습니다.  
또한 배열의 length 프로퍼티에는 배열 요소의 길이가 담겨있습니다.  

```javascript
//list.js
var various=[3.14, "pi", true, {x:1, y:2}, [2,4,6,8] ];
console.log(various.length);
```

## 출력 결과

```
4
```


## Array 생성자로 배열 생성하기

배열은 Array 생성자로도 생성할 수 있습니다.  
배열의 리터럴 요소는 Array 생성자의 인수가 됩니다.
Array 생성자의 인수가 한 개고 그 값이 양의 정수면 의미가 달라집니다. 이때 인수는 배열 길이를 뜻하므로 배열이 그 길이만큼 생성됩니다.
단 Array 생성자의 인수가 한 개고 그 값이 양의 정수가 아니면 오류가 발생합니다.

```javascript
//array.js
var various= new Array(3.14, "pi", true, {x:1, y:2}, [2,4,6,8] );
console.log(various.length);

var various = new Array(6);
console.log(various.length);
```

## 출력 결과

```
5
6
```

## 배열 요소의 추가와 삭제

없는 배열 요소에 값을 대입하면 새로운 요소가 추가됩니다.  
push 메서드를 통해 요소를 배열 끝에 추가할 수 있으며 delete 연산자를 통해 특정 배열 요소를 삭제할 수 있습니다.  
이런 추가나 제거로 인해 값이 정의되지 않은 요소가 있는 배열이 만들어지기도 합니다.  
이런 배열을 `희소 배열`이라고 합니다.  
희소 배열은 배열 요소의 개수와 배열의 길이가 다릅니다.


```javascript
//editList.js
var a=["A", "B", "C"];
a[3]= "D";
console.log(a);

a.push("D");
console.log(a);

delete a[1];
console.log(a);

console.log(a.length);
```

## 출력 결과

```
[ 'A', 'B', 'C', 'D' ]
[ 'A', 'B', 'C', 'D', 'D' ]
[ 'A', <1 empty item>, 'C', 'D', 'D' ]
5
```