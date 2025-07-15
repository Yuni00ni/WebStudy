import React from 'react'
// 필요한 기능들 가져오기
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import About from './components/About'
import Product from './components/Product'

const App2 = () => {
    return (
        /* React Router
            사용자가 요청한 URL에 따라 해당 URL에 맞는 페이지를 보여주는 역할
            1. React Router 설치 => 터미널 창에 npm i react-router-dom
            2. main.jsx로 이동 후 => App컴포넌트를 BrowserRouter안에 넣기
        
        */
        <div>
            <h1>React Router</h1>
            <Routes>
                <Route path='/' element={<Main />}></Route>
                <Route path='/about' element={<About />}></Route>
                {/* 메인경로 뒤에 product라는 주소값이 붙게 되면은 => Product컴포넌트를 보여주겠다*/}
                <Route path='/product' element={<Product />}></Route>
            </Routes>
        </div>
    )
}

export default App2