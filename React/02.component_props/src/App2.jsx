import React from 'react'
import Menubox from './components/Menubox'

// component(컴포넌트)
// 반복되는 코드를 하나로 묶어서 처리할 때
// 데이터를 받아줄 하위 컴포넌트로 사용
// 컴포넌트 생성 시, 대문자로 시작

const App2 = () => {

    let temp = 'ice'

    return (
        <div>
            <div>
                <h3>아메리카노</h3>
                <p>3000</p>
            </div>
            <div>
                <h3>아메리카노</h3>
                <p>3000</p>
            </div>
            <Menubox temp={temp} name="바닐라라떼" price="5000"></Menubox>
            <Menubox temp={temp} name="카페라떼" price="4000"></Menubox>
        </div>
    )
}

export default App2