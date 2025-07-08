import React from 'react'
import Menubox from './components/Menubox'
import Member from './components/Member'
import './App2.css'
// component(컴포넌트)
// 반복되는 코드를 하나로 묶어서 처리할 때
// 데이터를 받아줄 하위 컴포넌트로 사용
// 컴포넌트 생성 시, 대문자로 시작

// 객체 비구조화 할당
let student = {
    name: '둘리',
    sub: 'web',
    mbti: 'entp'
}

let {name, sub, mbti } = student
console.log(name, sub, mbti);


const App2 = () => {

    let temp = 'ice'
    let team = "ESGC"

    return (
        <div>
            <Menubox class="mb" temp={temp} name="바닐라라떼" price="5000"></Menubox>
            <Menubox temp={temp} name="카페라떼" price="4000"></Menubox>
            <Menubox temp={temp} name="아메리카노" price="2000"></Menubox>
            <hr />
            <Member team={team} name='A'></Member>
            <Member team={team} name='B'></Member>
            <Member team={team} name='C'></Member>
            <Member team={team} name='D'></Member>
        </div>
    )
}

export default App2