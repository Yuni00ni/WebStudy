import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../assets/netflix.jpg'
import '../style/Home.css'

const Home = () => {
  // 네이게이트 기능 불러오기
  const nav = useNavigate()
  return (

    <div className='home' style={{ backgroundImage: `url(${img})` }}>
      <div className='home-content'>
        <h1>Welcome to the Movie App</h1>
        {/* 버튼을 클릭 했을 때 -> 무비리스트 컴포넌트로 전환 */}
        <button onClick={() => { nav('/movies') }}>search</button>
      </div>
    </div>
  )
}

export default Home