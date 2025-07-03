// 유저 관련 라우터

const express = require('express');
const { login } = require('../controller/userController');
const router = express.Router();

/* 로그인 처리 */
router.post('/login', login);

module.exports = router;
