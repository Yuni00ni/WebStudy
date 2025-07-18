import React from 'react'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

    const idRef = useRef()
    const pwRef = useRef()
    const nav = useNavigate()


    const tryLogin = () => {
        let id = idRef.current.value
        let pw = pwRef.current.value
        console.log('id : ', id, "\npw : ", pw);  // 확인용

        axios.post('http://localhost:8000/user/login', {
            id: id,
            pw: pw
        }).then((res) => {
            console.log(res.data.nick);
            if (res.data == 0) {
                alert('로그인 실패..')
            }else {
                let nick = res.data.nick
                window.localStorage.setItem('nickname', nick)
                nav('/home')
            }

        })
    }

    return (
        <div>
            <h1>Login Page</h1>
            ID : <input type="text" ref={idRef} />
            <br />
            PW : <input type="password" ref={pwRef} />
            <br />
            <button onClick={tryLogin}>로그인 시도</button>
        </div>
    )
}

export default Login