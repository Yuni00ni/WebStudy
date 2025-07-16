import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../style/MovieList.css'
import { API_KEYS } from '../config/config'

// API키 변수 처리

// URL 설정
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEYS.API_KEY}`

const MovieList = () => {
    return (
        <div>MovieList</div>
    )
}

export default MovieList