### 프로그램 기본 작성법

다음은 factorial을 출력하는 예시 코드이다.
이를 node.js 환경에서 실행시켜 보자.

```javascript
//factorial.js
function fact(n) {
    if (n <= 1)
        return n;
    return n * fact(n-1);
}
for (var i = 1; i < 10; i++) {
    console.log(i + "! = " + fact(i));
}
```

기본적인 구조는 C와 크게 다르지 않다.