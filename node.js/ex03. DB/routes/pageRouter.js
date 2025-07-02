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
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

// localhost:3000/update
router.get('/update', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'update.html'))
})

module.exports = router;