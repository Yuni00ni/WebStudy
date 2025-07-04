// posts요청 처리하는 라우터

const express = require('express');
const router = express.router();

router.post('/', createPost);

module.exports = router;