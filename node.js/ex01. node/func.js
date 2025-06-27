// var.js 모듈 사용하기
const {odd, even} = require('./var'); // 현재 위치를 기준으로 상대경로로 작성(.js 생략 가능)

function checkOddOrEven(num) { // num <- 사용자가 넘겨주는 숫자 1개
    if(num % 2 == 1){
        return odd; // odd 변수가 가지고 있는 값 결과로 리턴(반환)
    }else{
        return even; // even 변수가 가지고 있는 값 결과로 리턴(반환)
    }
}

module.exports = checkOddOrEven;