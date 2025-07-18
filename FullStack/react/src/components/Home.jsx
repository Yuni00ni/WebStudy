import React, { useEffect, useState } from 'react'

const home = () => {
    const [nick, setNick] = useState('')

    useEffect(() => {
        setNick(window.localStorage.getItem('nickname'))
    }, [])
    return (
        <div>
            <h1>{nick}님 환영합니다~</h1>
        </div>
    )
}

export default home