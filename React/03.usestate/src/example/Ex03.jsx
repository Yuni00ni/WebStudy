import React, { useState } from 'react'

const Ex03 = () => {

    // 내가 버튼을 클릭했을 때, 클릭한 숫자와 랜덤한 숫자를 비교
    // 범위는 1 ~ 3

    // state생성 => 2개 생성(state변수 이름 => ranNum, inputNum) 두 개의 state변수 모두 초기값이 0
    const [ranNum, setRanNum] = useState(0)
    const [inputNum, setInputNum] = useState(0)


    // 함수 선언부
    // 버튼 클릭 시, 버튼에 적용되어있는 이벤트를 확인(이벤트 객체)
    // 이벤트 객체 사용 시 => event, e 둘 중에 편한 키워드를 선택
    const btnCk = (e) => {

        // console.log('버튼 이벤트');
        // console.log(event.target.innerText);

        // 클릭한 버튼의 숫자를 inputNum이라는 state안에 넣어주기
        // 형 변환(parseInt())
        setInputNum(parseInt(e.target.innerText))

        // 랜덤 수 만들기 -> ranNum이라는 state안에 넣어주기
        setRanNum(parseInt(Math.random() * 3 + 1))



    }

    return (
        <div>
            <div>
                <button onClick={btnCk} style={{ cursor: 'pointer' }}>1</button>
                <button onClick={btnCk} style={{ cursor: 'pointer' }}>2</button>
                <button onClick={btnCk} style={{ cursor: 'pointer' }}>3</button>
            </div>

            <div>
                내가 입력한 숫자 : {inputNum}
                <br />
                랜덤한 숫자 : {ranNum}
                <br />

                {/* 조건부 랜더링으로 처리 => 조건 2개(삼항연산자) */}
                {/* 비교했을 때, 두 개의 값이 같다면(true) '정답입니다' */}
                {/* 두 개의 값이 같지 않다면(false) '오답입니다' */}
                {inputNum === ranNum ? '정답입니다~' : '오답입니다~'}

            </div>
        </div>
    )
}

export default Ex03