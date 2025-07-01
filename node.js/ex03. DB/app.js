const express = require('express');
const path = require('path'); // 경로 다루는 모듈


const app = express(); // app생성
// 주소창에 주소를 입력해서 요청하는 것은 -> get요청
// 단순히 페이지만 보여지는 것 -> get
// join.html 응답 localhost:8888/join
app.get('/join', (req, res)=>{
  // __dirname : 현재 파일(app.ja)이 있는 절대 경로(ex03. DB폴더 내부) => ex03. DB경로/
  res.sendFile(path.join(__dirname, 'views', 'join.html'));
});

// login.html 응답 localhost:8888/login
app.get('/login',(req, res)=> {
  res.sendFile(path.join(__dirname, 'views', 'login.html'));
})

app.listen(8888, ()=>{
  console.log('Server is running on http://localhost:8888');
  console.log('join page http://localhost:8888/join');
  console.log('login page http://localhost:8888/login');
});

