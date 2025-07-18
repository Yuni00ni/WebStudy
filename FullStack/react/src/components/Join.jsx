import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Join = () => {
    // 화면에 떠 있는 DOM요소들 접근하기
    const idRef = useRef()
    const pwRef = useRef()
    const nickRef = useRef()
    const nav = useNavigate()

    return (
        <div>
            <h1>회원 가입 페이지입니다.</h1>
            ID : <input type="text" />
            <br />
            PW : <input type="password" />
            <br />
            NICK : <input type="text" />
            <button>JOIN</button>
            <button>초기화</button>
        </div>
    )
}

export default Join