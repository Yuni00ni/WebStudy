import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../style/MovieDetail.css'

// API키 등록
import { API_KEYS } from '../config/config'



const MovieDetail = () => {
  // useParams를 통해 url 파라미터 정보 가져오기
  const { id } = useParams()
  const nav = useNavigate()
  const [movie, setMovie] = useState()

  // axios통신
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEYS.API_KEY}`)
      // 응답받아온 데이터를 movie안에 넣기
      .then((res) => {
        console.log(res.data);
        setMovie(res.data)
      }).catch((e) => {
        console.error('Error Data : ', e)
      })
  }, [id])

  if (!movie) {
    return <div>Loading....</div>
  }

  return (
    <div className='movie-detail'>
      <button onClick={() => { nav('/') }}>홈으로 돌아가기</button>
      <button onClick={() => { nav('/movies') }}>영화 리스트로 돌아가기</button>
      <h1>{movie.title}</h1>
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
      <p>Release Date : {movie.release_date}</p>
      <p>Rating : {movie.vote_average}</p>
      <p>Overview : {movie.overview}</p>
    </div>
  )
}

export default MovieDetail