// 객체 (Object) : 속성과 값으로 구성되어있는 데이터의 집합
// ★ 객체는 {} 중괄호 이용

// 1. 객체 선언
let person = {};
console.log(person);

// 2. 객체 생성(할당)
person = {
    name : '임다이',
    favorit : 'JS',
    group : 'C반',
    talk : function(){
        alert('안녕하세요!');
    }
}

console.log(person);

// 3. 객체 내 데이터에 접근하는 방법
// Case 1. 객체이름.속성이름 ★ 제일 많이 사용
console.log('이름 : ', person.name);

// Case 2. 객체이름['속성명']
console.log('그룹 : ', person['group']);

// * 함수에 접근 -> 객체이름.속성이름()
person.talk();

// 4. 객체 내 데이터 수정
person.favorit = 'DB';
console.log(person);


// 5. 복합 데이터
// 배열 안에 객체가 있을 수 있고,
// ex) 1번 학생의 취미 2개, 2번 학생의 취미 3개, ...

// 객체 안에 배열이 있을 수 있다.
// ex) 주말 박스오피스의 순위

// 5-1) 배열 내 객체 넣기
let orderList = [
    {
        menu : '아메리카노',
        temp : 'ice',
        place : 'here',
        stamp : true
    },
    {
        menu : '토피넛라떼',
        temp : 'ice',
        place : 'takeout',
        stamp : true
    },
    {
        menu : '아이스티',
        temp : 'ice',
        place : 'takeout',
        stamp : false
    }
]

console.log(orderList);

console.log(`주문하신 ${orderList[0].temp} ${orderList[0].menu} 나왔습니다.`);

for(let i=0; i<orderList.length; i++){
    console.log(`주문하신 ${orderList[i].temp} ${orderList[i].menu} 나왔습니다.`);
}

// 5-2) 객체 내 배열 넣기
let person2 ={
    name : '임다이',
    hobby : ['여행', '코딩']
}

console.log(person2.hobby);

/*
    자료형을 구분해보자.

    1. 괄호 구분
        - {} : 객체
        - [] : 배열

    2. console로 자료형을 출력 시,
        - 인덱스 번호로 값 구분 : 배열
        - 속성 이름으로 값 구분 : 객체

    3. 객체 안에 접근하고 싶다면?
        - . -> 객체이름.속성이름

    4. 배열 안에 접근하고 싶다면?
        - 배열이름[인덱스 번호]

    5. 배열과 객체는 복합적으로 사용이 가능
*/