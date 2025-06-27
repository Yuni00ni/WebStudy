const express = require('express');
const path = require('path'); // 경로

const app = express(); // app(서버) 생성

// localhost:8888/join 요청 => join.html 응답
app.get('/join', (req, res)=>{
  // /join으로 요청이 들어오면 어떻게 처리할 것인지
  
  // 절대경로 : ex02. express/views/join.html
  res.sendFile(path.join(__dirname, 'views', 'join.html'));
});


// localhost:8888/login 요청 => login.html 응답
app.get('/login', (req, res)=>{

  res.sendFile(path.join(__dirname, 'views', 'login.html'));
});

// /user/join 요청 => 회원가입처리(생략) => login.html 응답
app.post('/user/join', (req, res)=>{
  // 회원가입처리
  // 사용자가 입력한 값 = 요청데이터(아이디, 비밀번호, 닉네임) 확인하기
  console.log(req.query); // 요청 데이터(쿼리) 확인
  


  res.sendFile(path.join(__dirname, 'views', 'login.html'));
  
});

app.listen(8888, () => {
  console.log('Server is running on http://localhost:8888');
  
});