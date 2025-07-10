import React, {useRef} from 'react'

const Ex07 = () => {
// userRef : 특정 DOM(요소)을 선택하고 싶을 때
// JS : getElementById, querySelector를 통해서 접근
// React에서도 클릭, 마우스를 올렸을 때 => DOM요소를 접근해서 변경

// useRef 사용하기
const divRef = useRef()

// 수치를 받아줄 함수를 생성
const changeSize = (n, m) => {
    // 전달받은 매개변수(수치)를 통해서
    // 실제 div태그의 style속성으로 접근해서 높이와 너비를 변경
    divRef.current.style.height = n
    divRef.current.style.width = n
    divRef.current.style.backgroundColor = m


}

const ckBtn = (event) => {
    console.log(event);
    // 각 버튼을 클릭했을 때 버튼안에 있는 텍스트를 가져오기
    console.log(event.target.innerText);
    console.log(divRef.current.style.backgroundColor);

    // 조건문 생성 => 내가 클릭한 버튼안에 있는 텍스트가 작게라면 => div의 높이, 너비를 100px로 변경
    // 버튼안의 텍스트가 원본이라면 => 높이, 너비 200px로 변경
    // 위의 조건 모두 다 아니라면 300px로 변경
    if(event.target.innerText == '작게') {
        changeSize('100px', 'yellow')
        
    }else if(event.target.innerText == '원본') {
        changeSize('200px', 'skyblue')
    }else {
        changeSize('300px', 'green')
    }
}

let btnStyle = {cursor: 'pointer'}

let divStyle = {
    backgroundColor : 'skyblue',
    width : '200px',
    height: '200px',
    marginTop : '3%'
}


    return (
        <div>
            <div>
                <button onClick={ckBtn} style={btnStyle}>작게</button>
                <button onClick={ckBtn} style={btnStyle}>원본</button>
                <button onClick={ckBtn} style={btnStyle}>크게</button>
            </div>

            {/* ref속성 => 접근하고자 하는 요소에 속성으로 넣어주면 된다 */}
            <div ref={divRef} style={divStyle}></div>
        </div>
    )
}

export default Ex07