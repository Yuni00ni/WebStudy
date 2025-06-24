// 문제 정의
// 1. 사용자에게 임의의 숫자 2개를 입력 받기
// 2. addNumber() 함수를 정의해서 입력 받은 2개의 값을
//    더한 결과를 출력하는 함수를 만들기
// 3. 함수를 호출해서 결과를 확인 -> console 창으로
// ** 함수선언문, 함수표현식, 화살표함수 3가지 풀어보기

let num1 = Number(prompt('첫 번째 숫자 입력 : '));
let num2 = Number(prompt('두 번째 숫자 입력 : '));

// 1) 함수선언문 => addNumber1
function addNumber1(a, b){
    return a+b;
}
console.log('함수선언문' , addNumber1(num1, num2));

// 2) 함수표현식 => addNumber2
const addNumber2 = function(a, b){
    return a+b;
}
console.log('함수표현식', addNumber2(num1, num2));

// 3) 화살표함수 -> addNumber3
const addNumber3 = (a, b)=>{return a+b;}
console.log('화살표함수', addNumber3(num1, num2));
const minusNumber3 = (a, b)=>{return a-b;}

let sign = prompt('기호를 입력하세요. (+, -)');

if(sign === '+'){
    document.write(`연산결과는 ${addNumber3(num1, num2)} 입니다.`);
}else if(sign === '-'){
    document.write(`연산결과는 ${minusNumber3(num1, num2)} 입니다.`);
}