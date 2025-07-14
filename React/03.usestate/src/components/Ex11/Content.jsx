import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../context/Ex11ThemeContext'

const Content = () => {
  // 현재 우리가 만들어놓은 데이터 보관함(ThemeContext) => 스테이트, 스테이트 함수
  // Footer 컴포넌트에서 이미 스테이트 함수를 사용해서 => 스테이트 값을 변경할 수 있도록 처리
  // Context안에서 스테이트 변수를 가지고 와서 적용만 하면 끝나는 문제
  // div 태그의 스타일 속성 변경 => 배경색, 글자색 모두 삼항연산자 처리
  // 배경색 => 참일때는 검정, 거짓일 때는 흰색, 글자색 => 참일 때는 흰색, 거짓일 때는 검정
  const { isDark, setIsDark } = useContext(ThemeContext)


  return (
    <div
      className='content'
      style={{
        backgroundColor : isDark ? 'black' : 'lightgray'
      }}
    >
      <h1 style={{ color : isDark ? 'lightgray' : 'black'}}>지각하지 않기! 결석하지 않기!</h1>
    </div>
  )
}

export default Content