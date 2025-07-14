import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Ex11ThemeContext'

// 필요한 기능들 임포트

const Header = () => {
  // 스테이트 변수 가지고 와서 적용
  const { isDark, setIsDark } = useContext(ThemeContext)

  return (
    // div태그의 스타일 속성 변경 => 글자색, 배경색
    <div
      className='header'
      style={{backgroundColor : isDark ? 'black' : 'white'}}
    >
      <h1 style={{color : isDark ? 'white' : 'black'}}>스마트인재개발원</h1>
    </div>
  )
}

export default Header