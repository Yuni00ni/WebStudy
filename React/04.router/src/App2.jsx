import React from 'react'
// 필요한 기능들 가져오기
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import About from './components/About'
import Product from './components/Product'

const App2 = () => {
    /* React Router
        사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 역할
        1. React Router 설치 => 터미널 창에 npm i react-router-dom
        2. main.jsx로 이동 후 => App컴포넌트를 BrowserRouter안에 넣기
        3. Routes => 여러 경로(Route)를 감싸서 가지고 있다가, 사용자가 요청한 조건에 맞는 Route가 있을 때, 해당 Route를 렌더링해준다
        4. Route => 실제 경로, 컴포넌트 세팅 => 필수 속성 2가지 => path(경로) : 사용자가 이렇게 url을 요청했을 때 / element(컴포넌트) : 어떤 컴포넌트를 보여줄것인가?
    
    */

    return (
        <div>
            <h1>React Router</h1>
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/about' element={<About />}></Route>
                {/* 메인경로 뒤에 product라는 주소값이 붙게 되면은 => Product컴포넌트를 보여주겠다*/}
                <Route path='/product/:num' element={<Product />}></Route>
                {/* 경로 : product뒤에 숫자가 붙어 있다면 num이라는 파라미터 변수에 담겠다 */}
            </Routes>
        </div>
    )
}

export default App2