import React, { useRef } from 'react'
import '../style/ex08_input.css'

const Ex08 = () => {

    // useRef 사용
    const inputRef = useRef()

    // 함수 선언부
    const buttonClick = () => {
        // input태그안에서 값을 접근하는 속성 value
        console.log(inputRef.current.value);
        // 출력 => alert를 통해서 화면에 띄우기
        alert(inputRef.current.value)
        // 입력 공간 초기화
        inputRef.current.value = ""

    }


    return (
        <div className='container'>
            <header className='header'>
                <h1>useRef Example</h1>
                <input ref={inputRef} type="text" placeholder='Enter Something' />
                <button onClick={buttonClick}>Show Input</button>
            </header>
        </div>
    )
}

export default Ex08