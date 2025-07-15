import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h2>글 목록</h2>
            <hr />
            <Link to='/product/1?best=true'>스터디 하실 분 모집합니다</Link>
            <hr />
            <Link to='/product/2'>식사 하실 분 찾습니다</Link>
            <hr />
            <Link to='/product/3'>공부 하실 분 모집합니다</Link>
        </div>
    )
}

export default About