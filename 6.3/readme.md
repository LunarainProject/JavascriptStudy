# 이벤트 처리기 

> 이 문서는 **엄청 중요**합니다. 꼭 여러 번 읽으세요.

웹 브라우저에서 프로그램은 기본적으로 `이벤트 주도형 프로그램`(event driven program)입니다.

이는 이벤트가 발생할 때 까지 기다렸다가 이벤트가 발생했을 때 미리 등록해 둔 작업을 수행하는 프로그램을 말합니다.

이벤트의 예시로는 마우스 클릭 등이 있습니다.

이벤트를 등록하는 방법은 크게 세 가지로,  
HTML 요소의 속성으로 등록하는 방법  
DOM 요소의 프로퍼티로 등록하는 방법  
addEventListener() 메서드를 이용하는 방법  
이 있습니다.

## HTML 요소의 속성으로 등록하기

```html
<!--button.html-->
<!DOCTYPE html>
<head>
    <title>button</title>
    <script>
        function func() { console.log('hello'); }
    </script>
</head>
<body>
    <input type="button" value="hello" onclick="func()" >
</body>
```

위와 같이 html 문서에 `<script>`태그를 이용하여 자바스크립트  코드를 삽입하고, `onclick` 속성에 함수를 써서 호출하도록 만드는 방법이 있습니다.

## DOM에서 가져온 HTML 요소에 이벤트 처리기 지정하기

`DOM(Documnet Object Model)`은 자바스크립트 등의 프로그램이 HTML 요소를 조작할 수 있게 하는 인터페이스입니다.

`window` : 웹 브라우저 윈도우 하나 또는 탭 하나를 가리키는 객체  
`document` : Document 객체. HTML 문서 전체를 가리킴. HTML 문서에서 요소 객체를 가져오거나, 요소를 새로 만드는 등의 기능을 제공.  
`요소 객체` : HTML 문서의 요소의 객체  

`window.onload` 프로퍼티에 함수를 대입하여 HTML이 모두 읽어들어진 후 실행되는 함수를 만들 수 있습니다.

그러므로 다음의 방법을 따라서 HTML 요소에 이벤트 처리기를 등록할 수 있습니다.

1. `window.onload`에 초기 설정 함수를 이벤트 처리기로 등록합니다.
2. 초기 설정 함수 내에서 요소 객체를 가져옵니다.  
3. 요소 객체의 프로퍼티에 이벤트 처리기로 동작할 함수를 등록합니다.  

요소 객체에는 `onclick`과 같은 `속성`이 프로퍼티로 있습니다. 이 프로퍼티에 함수를 대입하여 사용할 수 있습니다.  

`document.getElementById()` 메서드에 인수로 요소의 아이디를 문자열로 넣으면 해당 아이디를 가진 요소의 객체를 얻을 수 있습니다.  

위의 방법을 따라서, `DOM`을 이용하여 방식으로 위의 `button.html`을 다시 한 번 만들어 봅시다.

```html
<!--button2.html-->
<!DOCTYPE html>
<head>
    <title>button2</title>
    <script>
        function func() {
            console.log('hello');
        }

        window.onload = function() {
            let button = document.getElementById("button");
            button.onclick = func;
        }
    </script>
</head>
<body>
    <input type="button" value="hello" id="button">
</body>
```

## 주요 이벤트 처리기 이름 정리

이벤트 처리기 이름 | 이벤트 종류
-----------------|-----------
onclick | 마우스로 클릭했을 때
ondbclick | 마우스로 더블클릭했을 때
onmousedown | 마우스 버튼을 눌렀을 때
onmouseup | 마우스 버튼을 눌렀다가 뗐을 때
onmousemove | 마우스가 html요소 위에서 움직였을 때
onmouseout | 마우스가 html요소를 벗어났을 때
onmouseover | 마우스가 html요소 위에 놓여 있을 때
onkeydown | 키보드의 키가 눌렸을 때
onkeypress | 키보드의 키를 누르고 손가락을 떼었을 때
onkeyup | 키보드의 키에서 손가락을 떼었을 때
onchange | input 요소의 값이 바뀌었을 때
onblur | input 요소가 포커스를 잃었을 때
onfocus | input 요소에 포커스를 맞추었을 때
onselect | 텍스트 필드 등의 텍스트를 선택했을 때
onsubmit | 폼 제출 버튼을 눌렀을 때
onload | HTML을 모두 읽어들였을 때
onunloadWeb | 웹 페이지가 메모리에서 내려갈 때 (예: 다른 페이지로 전환할 때)
onabort | 페이지나 이미지 읽어 들이기가 중단되었을 때
onerror | 페이지나 이미지를 읽어 들이는 동안 오류가 발생했을 때
onresize | HTML 요소의 크기가 바뀌었을 때

## 타이머

window 객체에는 `setTimeout()` 메서드와 `setInterval()` 메서드가 있습니다. `setTimeout()` 메서드는 인수로 받은 메서드를 두 번째로 받은 인수(밀리초)만큼 후에 실행시킵니다. 현재 실행중인 이벤트 처리기의 작업이 끝나고, 그 시간만큼 지났는지 확인하여 처리하므로 정밀하게 실행되지는 않습니다.

`setInterval()` 메서드는 `setTimeout()` 메서드와 완전하게 비슷하지만 두 번째 인수 (밀리초)만큼의 간격을 두고 함수가 반복해서 실행됩니다.

`setInterval()` 함수가 리턴한 값을 `clearInterval()` 함수에 인수로 넘기면 함수 실행이 취소됩니다.

> 위에서 설명했듯이, window 객체는 생략할 수 있습니다. 브라우저에서는 붙이든 말든 상관 없고, node 환경에서는 window를 붙이지 않아야 잘 작동합니다. 그러니 붙이지 않는 습관을 들이도록 합시다.

```javascript
//timer.js
console.log('start timer')
let timer = setInterval(function () { 
                console.log('2 second');
            }, 2000);

setTimeout(function () {
    console.log('clear timer')
    clearInterval(timer);
}, 7000);
```

`setTimer()`, `setInterval()` 함수의 첫 인수로 문자열을 넘기면 이는 내부적으로 `eval()` 연산으로 평가됩니다.

