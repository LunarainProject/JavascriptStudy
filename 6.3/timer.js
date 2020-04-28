//timer.js
console.log('start timer')
let timer = setInterval(function () { 
                console.log('2 second');
            }, 2000);

setTimeout(function () {
    console.log('clear timer')
    clearInterval(timer);
}, 7000);
