// 유저 관련 라우터

const express = require('express');
const { login, getSession } = require('../controller/userController');
const router = express.Router();

/* 로그인 처리 */
router.post('/login', login);

router.get('/', getSession);


module.exports = router;
