import React from 'react'

const Ex04 = () => {
    // 배열 안에 객체데이터를 넣어서 출력 => 반복된 데이터로 출력
    let person = [
        { name: 'A', age: 1, bloodType: 'A' },
        { name: 'B', age: 2, bloodType: 'B' },
        { name: 'C', age: 3, bloodType: 'AB' }
    ]
    console.log(person[0].name);

    return (
        <div>
            <h3>Case 1 : 객체의 값을 하나씩 출력</h3>
            {/* 3명의 인물을 소개해주세요 => 배열안에 있는 객체 데이터를 꺼내
                이름과 그리고 나이, 혈액형 => 소개하는 글을 작성
                */}
                <p>이름 : {person[0].name}, 나이 : {person[0].age}, 혈액형 : {person[0].bloodType}</p>
                <p>이름 : {person[1].name}, 나이 : {person[1].age}, 혈액형 : {person[1].bloodType}</p>
                <p>이름 : {person[2].name}, 나이 : {person[2].age}, 혈액형 :  {person[2].bloodType}</p>
        </div>
    )
}

export default Ex04