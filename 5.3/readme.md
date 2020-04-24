
# 문자열 제어하기

## 문자열을 조작하는 메서드

문자열을 처리하기 위한 객체로 String 객체가 마련되어 있습니다.  
문자열을 String 객체로 변환하려면 String 생성자를 사용합니다. 
문자열의 길이는 배열과 마찬가지로 length 프로퍼티로 구할 수 있습니다.  
몇몇 유용한 String객체의 메서드를 아래 예제에서 사용해보겠습니다.  

```javascript
//msgObj.js
var msgObj = new String("Delicious bag")
console.log(msgObj.length);                   //→ 13
console.log(msgObj.charAt(0));                //→ D : 문자열의 첫 번째 문자
console.log(msgObj.charAt(1));                //→ e : 문자열의 두 번째 문자
console.log(msgObj.charAt(2));                //→ l : 문자열의 세 번째 문자

console.log(msgObj);                          //→ [String: 'Delicious bag'] : String 객체
console.log(msgObj.valueOf());                //→ 'Delicious bag' : 문자열

console.log(msgObj.slice(0,9));               //→ 'Delicious' : 0번째 부터 9번째 문자 이전의 문자열
console.log(msgObj.includes("Delic"));        //→ true : "Delic"가 포함되어 있는지를 뜻하는 논리값
console.log(msgObj.indexOf("i"));             //→ 3 : 문자 'i'가 처음 나오는 위치
```

## 출력 결과
```
13
D
e
l
[String: 'Delicious bag']
Delicious bag
Delicious
true
3
```
