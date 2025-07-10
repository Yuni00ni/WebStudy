import React, { useState, useRef } from 'react'


const Ex06 = () => {
    // state 생성
    const [count, setCount] = useState(0)

    // Ref 생성 => useRef기능을 countRef 변수안에 담아준다
    const countRef = useRef(0)

    // 객체안에 있는 값을 꺼내오기위해서 => current 속성을 사용
    console.log(countRef.current);

    // 함수의 선언부
    const increaseState = () => {
        setCount(count + 1)
    }

    // useRef안에 있는 값은 상태가 변할 때 그 값이 변경이된다 => useRef값은 렌더링에 관여하지 않음
    // 상태 변경 시 렌더링이 일어나지 않게끔 처리하고 싶을 때 사용
    const increaseRef = () => {
        countRef.current += 1
        console.log(countRef.current);
        
    }

    return (
        <div>
            <div>
                <p>state : {count}</p>
                <p>Ref : {countRef.current}</p>
                <button onClick={increaseState}>state up</button>
                <button onClick={increaseRef}>Ref up</button>
            </div>
        </div>
    )
}

export default Ex06