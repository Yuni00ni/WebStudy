import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Main = () => {
    /* Link 컴포넌트 (리액트 전용 a태그. spa방식을 유지하기 위해 a태그 대신 사용)
        브라우저 주소의 경로만 바꾸는 기능이 내장되어있다
        생김새는 a태그와 같지만 History API를 통해 이동이 가능하다
        이 때 일을 하는 친구가 BrowserRouter

        useNavigate
        import -> 'react-router-dom'
        요소에 넣어서 사용 가능하다 -> 페이지 이동을 도와주는 리액트 훅
    */

    const nav = useNavigate()

    // 로그인 상태
    let auth = false

    return (
        <div>
            Main
            <br />
            <Link to='/about'>About 페이지로 이동</Link>
            {/* 외부경로도 사용 가능 */}
            <br />
            <Link to='https://www.naver.com'>네이버로 이동</Link>
            <br />
            {/* 삼항연산자 -> auth변수 안에 있는 값이 참이라면 클릭했을 때 product컴포넌트를 보여주고, 거짓이라면 Main컴포넌트를 보여주기 */}
            <button onClick={() => {!auth ? nav('/product') : nav('/Main')}}>상품페이지 이동</button>
        </div>
    )
}

export default Main