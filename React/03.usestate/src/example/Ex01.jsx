import React, { useState } from 'react'

const Ex01 = () => {
    // useState 사용 => 상태가 변하는 값을 감지해서 화면에 출력하기 위해
    // num1 => state변수 | setNum1 => state변수를 변하게끔 도와주는 함수 | useState(0) => state변수 안에 담아줄 초기값
    // 초기값은 => 문자열, 불리언, 배열, 객체, 함수 ....
    const [num1, setNum1] = useState(0)



    // 숫자를 증감시켜주는 함수 만들기

    let num = 0

    const increase = () => {
        console.log('증가 함수 실행!');
        num = num + 1
        console.log(num);

        setNum1(num1 + 1)

    }

    // 버튼을 클릭할 때 숫자를 -1씩 감소
    // 음수로 떨어지지 않게 처리
    const decrease = () => {
        console.log('감소 함수 실행!');
        if (num1 > 0) {
            setNum1(num1 - 1)
        } else {
            console.log('음수는 허용 안함');

        }

    }
    return (
        <div>
            <div>
                <p>{num1}</p>
                <br />
                <button onClick={increase}>+1</button>
                <button onClick={decrease}>-1</button>
            </div>
        </div>
    )
}

export default Ex01