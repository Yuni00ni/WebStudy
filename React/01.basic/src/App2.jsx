import React from 'react'
import './app2.css' // css 불러오기


// 경로세팅 후 - npm init vite -> project name설정 -> framework(React)
// variant(javascript + swc) -> 프로젝트 폴더(package.json파일이 존재하는 루트) 접근 후(npm i) -> npm run dev(개발자 서버 시작)

// JSX문법 : 하나의 파일(컴포넌트)안에 HTML과 JS를 동시에 작성

// [ 기존의 JS문법과 다른점들 ]

/*
    1. 속성 적용 시 class대신 className을 사용
    2. 표현식이 사용 가능 -> {} -> 변수 안에 있는 값을 사용, css내용을 작성할 때, JS문법을 작성할 때 사용
    3. 조건에 따른 결과를 출력하는 방법(조건부 렌더링)
    3-1 . 조건이 하나라면 && 연산자 사용 -> 조건이 참(true)이라면 실행 / 거짓(false)이라면 실행
    3-2. 조건이 두 개라면 삼항연산자 사용
    3-3. 조건이 3개 이상이라면 return문 위에 조건문을 사용
    4. 태그를 사용할 때 -> 무조건 소문자로 작성하기! -> 대문자는 컴포넌트(파일)
    5. onclick속성 -> onClick(on 키워드 뒤에 붙는 이벤트 타입의 첫글자는 대문자로 시작)
    6. style속성 적용
*/

let msg = 'Hello React'
let isLogin = true
let name = '둘리'

let text = ''

// 조건문 생성
if (name === '고길동') {
    text = '어른'
} else if (name === '둘리') {
    text = '공룡'
} else {
    text = '어린이'
}


const App2 = () => {
    return (
        <div>
            <div className='item'>Hello React</div>
            <div>ESG</div>
            <div>{msg}</div>

            {/* 조건부 렌더링 */}
            {/* 조건이 하나일 때(단순 if문) */}
            {isLogin && '고객님 환영합니다~'}

            {/* 조건이 두개일 때 - 삼항연산자! */}
            {name === '고길동' ? <p>환영합니다~!!</p> : <p>다시 확인해주세요~!!</p>}

            {/* 조건이 3개 이상일 때 - 조건문 사용*/}
            {text}

            <p>
                <button onClick={() => { alert('마우스 클릭') }}>클릭</button>
            </p>
        </div>
    )
}

export default App2