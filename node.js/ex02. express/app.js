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

app.listen(8888, () => {
  console.log('Server is running on http://localhost:8888');
  
});