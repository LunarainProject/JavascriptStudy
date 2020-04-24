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
console.log(msgObj.indexOf("i"));             //→ 3 : 문자 "i"가 처음 나오는 위치
