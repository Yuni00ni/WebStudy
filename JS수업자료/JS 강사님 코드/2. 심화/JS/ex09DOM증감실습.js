// +1을 눌렀을 때, 호출할 plus 함수 생성
const plus = () => {
    console.log('plus 함수');
    
    // -> id가 number인 요소를 가져와서 num 안에 담아주기
    let num = document.getElementById('number');

    // -> id가 number인 요소의 내용을 1씩 증가한 숫자로 대입시켜주기 (누적연산)
    //    -> ** innerText로 가져온 값을 String형 -> number형태로 형변환
    console.log(parseInt(num.innerText)+1);
    num.innerText = (parseInt(num.innerText)+1)  
}

// -1을 눌렀을 때, 호출할 minus 함수 생성
const minus = ()=>{
    console.log('minus 함수');
    
    // -> id가 number인 요소를 가져와서 num에 담아주기
    let num = document.getElementById('number');

    // -> id가 number인 요소의 내용을 1씩 감소한 숫자로 대입시켜주기 (누적연산)
    //    -> ** innerText로 가져온 값을 String형 -> number 형태로 형변환
    //    -> 단, 0이하로 내려가지 않도록 할 것!
    console.log(parseInt(num.innerText)-1);
    num.innerText > 0 ? num.innerText = parseInt(num.innerText)-1 : num.innerText
    // if(num.innerText < 0){
    //     num.innerText = 0;
    // }
}