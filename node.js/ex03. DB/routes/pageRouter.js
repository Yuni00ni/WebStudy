const express = require('express');
const router = express.Router();
const path = require('path');

// 주소창에 주소를 입력해서 요청하는 것은 -> get요청
// 단순히 페이지만 보여지는 것 -> get
// join.html 응답 localhost:3000/join
router.get('/join', (req, res) => {
    // __dirname : 현재 파일(pageRouter.js)이 있는 절대 경로(routes) => routes 경로/
    res.sendFile(path.join(__dirname, '..', 'views', 'join.html'));
});

// login.html 응답 localhost:3000/login
router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

// localhost:3000/
router.get('/', (req, res) => {
    // member 테이블 안에 있는 전체 회원정보 불러오기 -> 응답할 때 같이 보내야함
    // => sendFile(정적 파일만 찾아서 응답할 수 있고 추가 데이터는 같이 보내지 못함)
    // 해결방법
    // 1. 템플릿엔진(pug, ejs, nunjucks....) => html 안에서 변수/조건문/반복문 등 간단한 로직 작성
    // 2. sendFile(index) -> 클라이언트에서 index파일을 받은 후 회원정보데이터를 (*)비동기방식으로 별도로 추가 요청

    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

// localhost:3000/update
router.get('/update', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'update.html'))
})

module.exports = router;