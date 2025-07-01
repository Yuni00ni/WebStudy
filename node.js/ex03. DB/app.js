const express = require('express');
const path = require('path'); // 경로 다루는 모듈
const pageRouter = require('./routes/pageRouter');
const {createMember} = require('./models/memberModel');

const app = express(); // app생성

// body-parser
app.use(express.urlencoded({extended:true})); // 폼 데이터 처리

// localhost:3000/~ => pageRouter
app.use('/', pageRouter);

app.post('/user/join', (req, res)=>{
  // 요청데이터 가져오기(body)
  console.log(req.body);
  const {id, pw, nick} = req.body;
  createMember(id, pw, nick);
  
})

app.listen(3000, ()=>{
  console.log('Server is running on http://localhost:3000');
  console.log('join page http://localhost:3000/join');
  console.log('login page http://localhost:3000/login');
});

