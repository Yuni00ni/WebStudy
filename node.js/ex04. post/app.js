const express = require('express');
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const session = require('express-session');
const postRouter = require('./routes/posts');

const app = express();

// middle-ware(미들웨어) : 요청 ~ 응답 존재하는 기술
app.use(express.urlencoded({extended:true})); // body-parser

// upload 폴더를 정적폴더(이미지업로드)로 사용 -> 폴더에 접근할 수 있는 경로
app.use('/upload', express.static('upload'));

app.use(session({ // session
  secret : 'mySecretKey',
  resave : false,
  saveUninitialized : false,
  cookie : {
    maxAge : 1000 * 60 * 30
  }
}));

app.use('/', indexRoutes); // localhost:3000/ ~
app.use('/users', userRoutes); // localhost:3000/users/ ~
app.use('/posts', postRouter); //localhost:3000/posts/~

app.listen(3000, () => {
  console.log('Server is runnig on http://localhost:3000');
  console.log('Server is runnig on http://localhost:3000/login');
  
});