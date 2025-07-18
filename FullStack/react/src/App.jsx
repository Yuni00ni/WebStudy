import { useState } from 'react'
// import './App.css' # 안쓸거임
// 필요한 기능, 컴포넌트 불러오기
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Join from './components/Join'
import Login from './components/Login'

function App() {

  return (
    // Route 세팅
    // '/' 메인 주소로 접속하면 => Join컴포넌트 보여주기
    // '/login' => Login컴포넌트
    // '/home' => Home컴포넌트
    <Routes>
      <Route path={'/'} element={<Join />}></Route>
      <Route path={'/login'} element={<Login />}></Route>
      <Route path={'/home'} element={<Home />}></Route>
    <>
    </>
    </Routes>
  )
}

export default App
