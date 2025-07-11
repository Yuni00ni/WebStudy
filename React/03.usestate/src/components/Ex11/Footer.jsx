import React, { useContext } from 'react'
import { ThemeContext } from '../../context/Ex11ThemeContext'

const Footer = () => {
    // 컨텍스트 사용 => value 속성 안에 있는 2개의 값 가져오기
    const { isDark, setIsDark } = useContext(ThemeContext)

    // 함수명 => toggleTheme
    // 사용목적은 state안에 있는 값을 계속 반대로 바꾸기 위해서
    const toggleTheme = (e) => {
        setIsDark(!isDark)
        console.log(isDark);
        console.log(e);
        isDark ? e.target.innerText = 'Light Mode' : e.target.innerText = 'Dark Mode'
        
        
    }
    return (
        <div>
            <footer
                onClick={toggleTheme}
                className='footer'
                style={{ backgroundColor : isDark ? 'black' : 'lightgray'
                    // 배경색상 => 값을 삼항연산자로 처리
                    // state값이 참이라면 black 거짓이라면 lightgray
                }}
            >
                <button className='button' onClick={toggleTheme}>
                    Dark Mode
                    {/* state값이 참이라면 버튼 안 텍스트를 Lishgt Mode 거짓이라면 Dark Mode */}
                </button>
            </footer>
        </div>
    )
}

export default Footer