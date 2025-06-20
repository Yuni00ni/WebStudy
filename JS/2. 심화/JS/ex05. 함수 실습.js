// 문제 정의
// 1. 사용자에게 임의의 숫자 2개를 입력 받기
// 2. addNumber() 함수를 정의해서 입력 받은 2개의 값을
//          더한 결과를 출력하는 함수를 만들기
// 3. 함수를 호출해서 결과를 확인 -> alert 창으로

let num1 = parseInt(prompt('첫 번째 수를 입력해주세요.'));
let num2 = parseInt(prompt('두 번째 수를 입력해주세요.'));

function addNumber1(num1, num2) {
    console.log(num1 + num2);
    
}
addNumber1(num1, num2);

const addNumber2 = function(num1, num2) {
    console.log(num1 + num2);
    
}
addNumber2(num1, num2);
const addNumber3 = (num1, num2) => {
    console.log(num1 + num2);
    
}
addNumber3(num1, num2);