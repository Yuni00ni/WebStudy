const express = require('express');
const path = require('path'); // 경로 다루는 모듈
const pageRouter = require('./routes/pageRouter');
const {createMember, loginMember} = require('./models/memberModel');

const app = express(); // app생성

// body-parser
app.use(express.urlencoded({extended:true})); // 폼 데이터 처리

// localhost:3000/~ => pageRouter
app.use('/', pageRouter);

app.post('/user/join', async (req, res)=>{
  // 요청데이터 가져오기(body)
  console.log(req.body);
  const {id, pw, nick} = req.body;
  const result = await createMember(id, pw, nick); // 1 -> 회원가입 성공 / 0 -> 회원가입 실패
  
  console.log('result : ', result);
  
  if(result>0) { // 1
    // 최초로 요청한 경로(/user/join)가 주소창에 그대로 남음
    // res.sendFile(path.join(__dirname, 'views', 'login.html'));
    // redirect 방식 : 클라이언트에게 특정 주소로 다시 요청하라고 응답하는 방식
    res.redirect('/login');
  }else { // 0
    // res.sendFile(path.join(__dirname, 'views', 'join.html'));
    res.redirect('/join');

  }
});

// 로그인 : 사용자가 입력한 아이디, 비밀번호가 member DB 있는 지 확인하고 있으면(성공) 없으면(실패)
app.post('/user/login', async (req, res)=> {
  const {id, pw} = req.body;
  const result = await loginMember(id, pw);

  if(result.length > 0){
    res.redirect('/');
  }else {
    res.redirect('/login');
  }
});

app.listen(3000, ()=>{
  console.log('Server is running on http://localhost:3000');
  console.log('join page http://localhost:3000/join');
  console.log('login page http://localhost:3000/login');
});

