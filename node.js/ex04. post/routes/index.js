// 기본 페이지 라우터
const express = require('express');
const path = require('path');
const router = express.Router();

/* GET login page. */
router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'login.html'));
});

module.exports = router;
