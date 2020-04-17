# ECMA Script 6 추가 데이터 타입

## 심벌
심벌은 새롭게 추가된 원시 값으로 **유일무이한 값**입니다.

심벌은 `Symbol()`으로 생성합니다.  
`Symbol()`은 호출될 때마다 새로운 값을 만듭니다. 두 번 심벌을 생성하게 되면 두 심벌은 서로 다릅니다.  
`Symbol()`에 인수를 전달하게 되면 생성된 심벌에 설명을 덧붙일 수 있습니다.  
심벌에 `toString()` 메서드를 사용하면 심벌의 설명을 확인할 수 있습니다.  

## 심벌에 문자열 연결하기
`Symbol.for()`을 사용하면 문자열과 연결된 심벌을 생성할 수 있습니다.
`Symbol.for('any-string')`으로 생성된 심벌은 같은 문자열로 생성된 심벌끼리 서로 비교 연산을 수행하면 `true`가 됩니다.  
심벌과 연결된 문자열은 `Symbol.keyFor()`으로 구할 수 있습니다.

```javascript
//symbol.js
var sym1 = Symbol();
var sym2 = Symbol();
var sym3 = Symbol('paxbun');

console.log(sym1 == sym2) //false
console.log(sym3.toString()); //Symbol(paxbun)

var a = Symbol.for('hello');
var b = Symbol.for('hello');
var c = Symbol.for('bye');
var d = Symbol('bye');

console.log(a == b, b == c);   //true false
console.log(Symbol.keyFor(c)); //bye
console.log(Symbol.keyFor(d)); //undefined
```

## 템플릿 리터럴
템플릿은 일부를 재사용할 수 있는 틀을 의미합니다.  
템플릿 리터럴은 역따옴표(`)로 묶은 문자열입니다. 템플릿 리터럴은 중간에 줄바꿈을 하면 일반적인 줄 바꿈을 사용할 수 있습니다.

``
    `My name is
``  
``
    Song, Daegeon`
``

과 같이 두 줄에 걸쳐서 쓴 텍스트는 문자열 리터럴로 표시하면,  

`"My name is\nSong, Daegeon" `

이라고 쓴 것과 같은 효과를 냅니다. 물론 템플릿 리터럴에서도 이스케이프 시퀀스를 사용할 수 있습니다. 이스케이프 시퀀스를 그대로 출력하려면 템플릿 리터럴 앞에 `String.raw`를 붙입니다.
이러한 함수를 **태그 함수**라고 합니다.

또한 템플릿 리터럴 안에는 `${...}`으로 표현되는 **플레이스 홀더**를 넣을 수 있습니다. 플레이스 홀더는 내부에 `표현식`을 넣을 수 있는 부분으로, 상수, 변수, 계산식 등을 적을 수 있으며 그 결괏값이 문자열 도중에 삽입됩니다.

```javascript
//template-literal.js
var a = `I'm happy
             today.`;
var b = "I'm happy\ntoday.";
var c = String.raw`I'm happy\ntoday.`;

console.log(a);
console.log(b);
console.log(c);

var d = 10;
var e = 12;
console.log(`d : ${d}, e : ${e}, d+e : ${d+e}`);
```
### 출력 결과

```
I'm happy  
             today.  
I'm happy  
today.  
I'm happy\ntoday.  
d : 10, e : 12, d+e : 22
```