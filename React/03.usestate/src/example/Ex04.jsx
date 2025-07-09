import React from 'react'

const Ex04 = () => {
    // 배열 안에 객체데이터를 넣어서 출력 => 반복된 데이터로 출력
    let person = [
        { name: 'A', age: 1, bloodType: 'A' },
        { name: 'B', age: 2, bloodType: 'B' },
        { name: 'C', age: 3, bloodType: 'AB' }
    ]

    let food = ['라면', '도시락', '샐러드']
    let numlist = [2, 4, 6, 8, 10]

    return (
        <div>
            <h3>Case 1 : 객체의 값을 하나씩 출력</h3>
            {/* 3명의 인물을 소개해주세요 => 배열안에 있는 객체 데이터를 꺼내
                이름과 그리고 나이, 혈액형 => 소개하는 글을 작성
                */}
            <p>이름 : {person[0].name}, 나이 : {person[0].age}, 혈액형 : {person[0].bloodType}</p>
            <p>이름 : {person[1].name}, 나이 : {person[1].age}, 혈액형 : {person[1].bloodType}</p>
            <p>이름 : {person[2].name}, 나이 : {person[2].age}, 혈액형 :  {person[2].bloodType}</p>

            <h3>Case 2 : Map 함수를 이용</h3>
            {/* map함수는 기존의 배열안에 있는 데이터를 가져와서 새로운 배열로 반환함 => 기존의 배열은 영향을 받지 않는다 
                    => 기존 배열안에 있는 데이터를 -> item이라는 키워드로 묶어준다
                    */}
            {person.map((item) => (
                <p key={item.name}>
                    이름 : {item.name}, 나이 : {item.age}, 혈액형 : {item.bloodType}
                </p>
            ))}

            <h3>Case 3 : 배열데이터를 변경하기</h3>
            {/* map함수를 통해서 기존의 배열데이터를 => 버튼으로 변경 */}
            {food.map((item) => ( 
                <button key={item} style={{ backgroundColor: 'pink', cursor : 'pointer' }}>{item}</button>
            ))}
            <br />
            {numlist.map((item) => (
                <button key={item} style={{ backgroundColor: 'yellowgreen', cursor : 'pointer' }}>{item}</button>
            ))}
        </div>
    )
}

export default Ex04