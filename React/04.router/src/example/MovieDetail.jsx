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
  const { movie, setMovie } = useState([]) 

  return (
    <div>MovieDetail</div>
  )
}

export default MovieDetail