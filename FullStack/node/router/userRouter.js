// '/user/' 요청을 처리할 라우터
// 필요한 모듈 불러오기
const express = require('express')
const router = express.Router()

// 데이터 베이스 관련 내용 가져오기
const conn = require('../config/database.js')

// 회원 가입 로직 처리 => /join 경로에 post형식으로 요청이 들어오면
router.post('/join', (req, res) => {
    console.log('req.body : ', req.body);
    let { id, pw, nick } = req.body
    console.log('id : ', id, "\npw : ", pw, "\nnick : ", nick);

    // DB에 저장하는 쿼리문 작성
    let sql = "insert into member values(?, ?, ?)"

    // DB연동
    // 배열로 처리하는 이유 -> MySQL 라이브러리가 자동으로 값을 안전하게 처리
    conn.query(sql, [id, pw, nick], (err, result) => {

        // 에러가 나면 json형식으로 0이라는 숫자를 보내겠다
        if (err) {
            console.error('DB오류 : ', err);
            return res.json(0)

        }
        console.log(result);
        if (result.affectedRows > 0) {
            console.log('회원가입 성공!');
            res.json(1)
        } else {
            console.log('회원가입 실패..');
            res.json(0)
        }

    })


})

// 로그인 처리
router.post("/login", (req, res) => {
    console.log('req.body', req.body);
    let { id, pw } = req.body
    console.log('id : ', id, "\npw : ", pw);

    // 로그인 처리 sql작성
    let sql = "select * from member where id=? and pw =?"
    conn.query(sql, [id, pw], (err, result) => {
        if (err) {
            console.error('DB 오류 : ', err);
            return res.json(0)
        }
        console.log(result);
        if (result.length > 0) {
            console.log('로그인 성공!');
            res.json({nick : result[0].nick})
        } else {
            console.log('로그인 실패..');
            res.json(0)

        }

    })
})
module.exports = router