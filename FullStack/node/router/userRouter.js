// '/user/' 요청을 처리할 라우터
// 필요한 모듈 불러오기
const express = require('express')
const router = express.Router()

// 데이터 베이스 관련 내용 가져오기
const conn = require('../config/database.js')