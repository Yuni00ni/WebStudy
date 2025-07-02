const express = require('express');
const router = express.Router();
const {join, login, update, remove, list} = require('../controller/memberController');

router.post('/join', join);

// 로그인 : 사용자가 입력한 아이디, 비밀번호가 member DB 있는 지 확인하고 있으면(성공) 없으면(실패)
router.post('/login', login);

// 회원정보수정
router.post('/update', update);

// 회원탈퇴
router.get('/delete', remove);

// 회원목록 조회
router.get('/list', list);
module.exports = router;