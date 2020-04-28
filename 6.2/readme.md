# Console 객체

콘솔 객체 또한 자바스크립트의 내장 객체로, Node.js와 웹 브라우저 등 다양한 환경에서 사용할 수 있습니다.

### Console 객체의 주요 메서드

메서드 | 설명
---   |----
`console.dir    `| 객체의 대화형 목록 출력
`console.error  `| 오류 메시지 출력
`console.info   `| 메시지 타입 로그 출력
`console.log    `| 일반 로그 출력
`console.time   `| 처리 시간 측정용 타이머 시작
`console.timeEnd`| 처리 시간 측정용 타이머를 정지시키고 시작한 후에 흐른 시간을 밀리초 단위로 출력
`console.trace  `| 스택 트레이스 출력
`console.warn   `| 경고 메시지 출력

## 텍스트 출력 메서드

`console.log`, `console.info`, `console.warn`, `console.error`는 모두 사용방법이 같은 단순 출력을 위한 메서드입니다.

인수를 넣고 싶은 만큼 넣을 수 있고, 어떤 타입의 값을 넣더라도 문자열로 변환하여 출력합니다.

서식 문자를 사용할 수 있습니다. 다음의 예시를 참고하십시오.

```javascript
//console-log.js
let name = 'Daegeon'
console.log('His name is %s and his age is %d', name, 21);
```
`%d` : 숫자(node.js는 숫자, 브라우저 환경에서는 정수) 
`%s` : 문자열
`%f` : 부동소수점 값으로 변환(node.js에서는 지원하지 않음.)


## 객체의 출력

브라우저 환경에서 `console.dir()` 메서드를 사용하면, 인수로 전달된 객체의 프로퍼티를 모두 확인할 수 있습니다. 

## 타이머

`console.time()`과 `console.timeEnd()` 메서드를 이용하여 특정 코드의 실행 시간을 측정할 수 있습니다. `console.time()`은 타이머의 이름을 뜻하는 문자열을 인자로 넘겨 호출합니다. `console.timeEnd()` 또한 인수로 지정한 문자열을 넘겨 호출할 수 있고 이 메서드가 호출되면 처리에 소요된 시간이 밀리초 단위로 표시되게 됩니다. 이렇게 문자열을 다르게 해서 여러개의 타이머를 동시에 작동시킬 수 있습니다.  
