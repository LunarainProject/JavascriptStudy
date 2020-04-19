# 내장 객체

## 내장 생성자

자바스크립트의 내장 객체들은 내장 생성자를 가집니다.

|생성자 이름|생성되는 객체                      |
|----------|----------------------------------|
|Object    |일반 객체                          |
|String    |문자열 객체                        |
|Number    |숫자 객체                          |
|Boolean   |논리값 객체                        |
|Array     |배열                               |
|Date      |날짜와 시간을 다루는 객체           |
|Function  |함수 객체                          |

`숫자 객체`라는 말이 좀 이상하게 들릴 수 있는데, 브라우저는 **원시 타입**인 `숫자`를 자동으로 `숫자 객체`로 바꾸어 줍니다.

ECMAScript 6부터는 새로운 내장 객체들이 추가되었습니다. Symbol 객체가 그 예시입니다.

## Date 내장 객체

Date 생성자는 날짜, 시간을 표현하는 객체를 생성합니다. 기본값으로 생성자는 현재 시간을 담아 줍니다. 생성자에 년도, 월, 일, 시, 분, 초의 순서로 값을 전달하면 그 시간으로 생성됩니다.

```javascript
//date.js
let now = new Date();
console.log(now);

let then = new Date(2018, 1, 1);
let elapsed = now - then; // millisecond unit
console.log(elapsed);
console.log(now.getFullYear(), now.getMonth(), now.getDay());
```

## 출력 결과

```
2020-04-17T09:46:56.147Z
69706016147
2020 3 5
```

## Function 생성자

Function 생성자를 이용하면 함수를 생성할 수 있습니다. 

```
var 변수이름 = new Function(첫번째 인수, ..., n번째 인수, 함수 몸통)

예시

var square = new Function("x", "return x*x");
```

특별한 상황 외에는 사용하지 않고, 상당히 위험한 방식입니다.

## 전역 객체

전역 객체는 **전역 프로퍼티**, **전역 생성자**, **전역 함수**, **내장 객체**를 가지고 있습니다. `Math` 등이 내장 객체에 포함됩니다. 
