import React, { useState } from 'react'
import data from '../json/ex05data.json'
import Ex05map from '../components/Ex05map.jsx'

const Ex05 = () => {
    console.log(data.result[0].birthYear);
    // filter함수를 통해서 조건에 부합하는 데이터들만 걸러주기
    let filter_data = data.result.filter((item) => (item.birthYear <= 1994))

    // state 생성 => newArr | 초기값은 filter_data
    const [newArr, setNewArr] = useState(filter_data)

    return (
        <div>
            <h1>Map 실습</h1>
            {/* flex => 부모 요소에서 적용, 요소들을 가로로 배치 시켜줌 */}
            <div style={{ display: 'flex' }}>
                {/* 우리가 가지고온 json파일을 활용해서 하위 컴포넌트로 값을 전달하기 */}
                {data.result.map((item) => (
                    <Ex05map key={item.title} item={item}></Ex05map>


                ))}
            </div>
            <hr />
            <br />
            {/* filter 함수
                기존의 배열데이터를 가져와서 주어진 조건에 맞는 데이터들만 모아
                새로운 배열로 반환하는 함수
            */}

            <p>1994년생과 나이가 같거나, 혹은 많은 사람들만 출력하시오</p>
            {/* map함수를 통해서 화면에 출력 => h3, p  => 해당하는 인물의 이름*/}
            {newArr.map((item) => (
                <h3 key={item.title}>{ }</h3>
            ))}
        </div>
    )
}

export default Ex05