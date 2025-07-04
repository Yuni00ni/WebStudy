// posts요청 처리하는 라우터

const express = require('express');
const multer = require('multer');
const path = require('path');
const { createPost } = require('../controller/postController');

const router = express.Router();

// 이미지 파일 저장
const storage = multer.diskStorage({ // 서버 디스크 저장
    destination: (req, file, cb) => { // cb => 함수(call back)
        cb(null, 'upload/'); // 저장 폴더 지정(해당 폴더는 만들어 놓아야함!)
    },

    filename: (req, file, cb) => {
        // 현재 시간 기반 유니크한 이름 생성 + 파일 확장자
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage }); // 위에 정의된 내용 기반 미들웨어로 사용

// single : 단일 파일
// array(fieldName, maxCount => 최대개수)
router.post('/', upload.single('img'), createPost);

module.exports = router;