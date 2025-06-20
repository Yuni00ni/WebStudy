// 문제 정의
// 1. 사용자에게 임의의 숫자 2개를 입력 받기
let num1 = parseInt(prompt('첫 번째 수를 입력해주세요.'));
let num2 = parseInt(prompt('두 번째 수를 입력해주세요.'));

// 2. addNumber() 함수를 정의해서 입력 받은 2개의 값을
//          더한 결과를 출력하는 함수를 만들기

// 1) 함수 선언문 => addNumber1
function addNumber1(num1, num2) {
    console.log('함수 선언문 : ', num1 + num2);
    
}

// 2) 함수표현식 => addNumber2
const addNumber2 = function(num1, num2) {
    console.log('함수 표현식 : ', num1 + num2);
    
}

// 3) 화살표함수 => addNumber3
const addNumber3 = (num1, num2) => {
    console.log('화살표 함수 : ', num1 + num2);
    
}

// 3. 함수를 호출해서 결과를 확인 -> console 창으로

addNumber1(num1, num2);
addNumber2(num1, num2);
addNumber3(num1, num2);



// 입력받고 사용하는 사칙연산 함수

let n = prompt('기호를 입력하세요');

const addNumber4 = (a, b, n) => {

    if(n == '+') {
        return a + b;
    }else if(n == '-') {
        return a - b;
    }else if(n == '*') {
        return a * b;
    }else if(n == '/') {
        return a / b;
    }else if(n == '%') {
        return a % b;
    }else {
        return "잘못된 입력입니다."
    }
}

console.log(`연산 결과 : ${addNumber4(num1, num2, n)}`);
