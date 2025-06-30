const express = require('express');
const path = require('path'); // 경로

const app = express(); // app(서버) 생성

// 바디파싱(body-parser) <- 데이터를 가져오기전에 body-parser가 준비가 되어야지만 제대로 데이터를 파싱할 수 있음(사전준비 해야함)
app.use(express.urlencoded({extended : true})); // form 태그(body에 포함되어 오는 데이터)에 작성된 데이터 파싱



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
  // console.log(req.query); // 요청 데이터(쿼리) 확인 => url 뒤에 붙는 쿼리스트링(get으로 요청 시 입력값 가져오는 방법)

  console.log(req.body); // post(데이터가 패킷의 바디에 포함됨)
  
  // 응답하는 파일이 화면에 보여지기는 하지만 주소창은 바뀌지 않음
  // -> 어색함
  // res.sendFile(path.join(__dirname, 'views', 'login.html'));
  // 이자리에서 login.html을 응답하는게 아니라
  // /login 경로로 요청을 다시 하게 만듦(주소도 바뀌고 login.html 응답받을 수 있음)
  res.redirect('/login');
  console.log('nodemon');
  
});

// /user/login
app.post('/user/login', (req, res)=> {
  // 로그인처리
  console.log(req.body);
  res.redirect('/login');
  
  
});

app.listen(8888, () => {
  console.log('Server is running on http://localhost:8888');
  
});