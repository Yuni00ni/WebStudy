import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../style/MovieList.css'

// API키 받아오기
import { API_KEYS } from '../config/config'

// URL 설정
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEYS.API_KEY}`

const MovieList = () => {
    // state 생성
    const [movie, setMovie] = useState([])

    useEffect(() => {
        // axios 요청을 통해서 콘솔창에 영화데이터를 출력
        axios.get(URL).then((res) => {
            console.log(res.data.results);
            
        })
    }, [])

    return (
        <div>MovieList</div>
    )
}

export default MovieList