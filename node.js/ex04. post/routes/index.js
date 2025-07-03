// 기본 페이지 라우터
const express = require('express');
const path = require('path');
const router = express.Router();

/* 로그인 페이지 */
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

// 메인 페이지
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
})
module.exports = router;
