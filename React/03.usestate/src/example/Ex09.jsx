import React, { useState } from 'react'
import Ex09sub from '../components/Ex09sub'

const Ex09 = () => {
    // 컴포넌트끼리 값 전달하기
    // Ex09 => 부모요소, Ex09sub => 자식요소

    // state생성 => inputTitle, rcTitle
    const [inputTitle, setInputTitle] = useState('')
    const [rcTitle, setRcTitle] = useState('')

    // 함수 생성 => 하위컴포넌트로 전달
    const changeData = (e) => {
        setRcTitle(e.target.value)
    }

    return (
        <div>
            <h2>컴포넌트끼리 값 전달하기!</h2>
            <p style={{fontSize : "18px"}}>
                1-1. 상위에서 입력 : 
                <input type="text" style={{margin : '5px'}} onChange={(e)  => {
                    console.log(e.target.value);
                    setInputTitle(e.target.value)
                    console.log('i', inputTitle);
                    
                }}/>
            </p>
            {/* 하위 컴포넌트를 불러와서 props방식으로 값 전달 */}
            <Ex09sub title = {inputTitle} changeData={changeData}></Ex09sub>
            <span>2-2. 상위에서 입력받은 값은 {rcTitle} 입니다.</span>
        </div>
    )
}

export default Ex09