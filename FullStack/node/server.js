const express = require('express')
const app = express()
const cors = require('cors')
const userRouter = require('./router/userRouter')

// 폼형태에서 post 방식으로 제출시 필요한 미들웨어
app.use(express.urlencoded({ extended: true }))

// post 요청에서 json형식으로 데이터 파싱
app.use(express.json())

app.use(cors)