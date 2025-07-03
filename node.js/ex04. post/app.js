const express = require('express');
const indexRoutes = require('./routes/index');
const userRoutes = require('./routes/users');
const session = require('express-session');

const app = express();

// middle-ware(미들웨어) : 요청 ~ 응답 존재하는 기술
app.use(express.urlencoded({extended:true})); // body-parser

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


app.listen(3000, () => {
  console.log('Server is runnig on http://localhost:3000');
  console.log('Server is runnig on http://localhost:3000/users/login');
  
});