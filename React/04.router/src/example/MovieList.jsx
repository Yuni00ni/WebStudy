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
            setMovie(res.data.results)

        }).catch((e) => {
            console.error('Error Data', e)

        })
    }, [])

    return (
        <div className='movie-list'>
            <h1>Popular Movies</h1>
            <Link to='/' className='home-link'>
                <button>홈으로</button>
            </Link>
            <div className="movies">
                {/* 응답받아온 data -> state안에 있는 상태
                    map함수를 통해서 총 20개의 포스터를 제작
                    `https://image.tmdb.org/t/p/w200`
                */}
                {movie.map((item) => (
                    <div key={item.id} className='movie'>
                        <Link to={`/movie/${item.id}`}>
                            <img src={`https://image.tmdb.org/t/p/w200${item.poster_path}`} />
                        </Link>
                        <div className='movie-info'>
                            <h2>{item.original_title}</h2>
                            <p>Rating : {item.vote_average}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MovieList