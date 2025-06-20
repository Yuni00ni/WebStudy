// 함수 : 특정 기능들을 묵어서 호출할 수 있도록 하는 기능
//              - 중복되는 코드를 최소화하고 재사용성이 좋음
//              - 함수를 정의할 때는 function 키워드를 사용
//              - 특정 값을 돌려줄 때는 return문을 사용

// "나만의 기계를 만들어서 필요할 때마다 가져다가 사용해보자!"
// 1. 함수 선언
// function 함수이름(매개변수){}
// () 매개변수 -> 함수의 재료(필수, 공란이면 생략가능)
// {} 실행문 -> 누군가가 함수를 호출했을 때 실행시킬 로직
/*
    function 믹서기(과일) {
        과일을 간다.
    }
*/
function makeJuice() {
    console.log('========================================');
    console.log('주스 제조 시작!');
    console.log('오렌지를 착즙한다.');
    console.log('오렌지 주스가 완성되었다!');
    console.log('========================================');
}

// 2. 함수의 호출
// 함수이름();

makeJuice();
makeJuice();
makeJuice();

// -> 여러번 호출을 하면 여러번 실행이 되어서 출력이 됨
//      그래서 하나 기능을 만들어놓으면 이렇게 필요할 때마다 호출해서 사용하기만 하면 됨


// 3. 매개변수를 이용한 함수
function makeAnyJuice(fruit, size) {
    console.log('========================================');
    console.log('주스 제조 시작!');
    console.log(fruit,'을/를 착즙한다.');
    console.log(fruit , '주스가 완성되었다!');
    console.log('========================================');

    if(size == 'tall') {
        console.log(fruit, size, '3500원입니다.');
        
    }else if(size == 'venti') {
        console.log(fruit, size, '4500원입니다.');
        
    }
}

makeAnyJuice("자몽", 'tall');
makeAnyJuice("레몬", 'venti');

// 4. return을 사용한 함수
// 함수를 호출했을 때 단순히 실행만 하는게 아니라
// 값으로 받고싶다면 함수 내 return문을 사용

function makeRandom() {
    let ranNum = parseInt(Math.random()*10 )+1;
    return  ranNum;

}

console.log(makeRandom());
console.log(makeRandom());
console.log(makeRandom(), makeRandom(), makeRandom(), makeRandom(), makeRandom());

document.write(makeRandom());

console.log(makeRandom() * 2);
console.log(makeRandom() + 2);
console.log(makeRandom() - 2);
console.log(makeRandom() / 2);
console.log(makeRandom() % 2);
