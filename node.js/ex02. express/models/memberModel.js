// member관련 sql문을 실행하는 파일입니다.

// DB 연결(모듈 가져오기)
const pool = require('../db/mysql-conn');

// 회원가입
async function createMember(id, pw, nick) { // creatMember(id, pw, nick)
    // 1. pool 사용해서 실제 연결
    const conn = await pool.getConnection();

    const result = await conn.execute(
        'INSERT INTO MEMBER(ID, PW, NICK) VALUES(?, ?, ?)',
        [id, pw, nick]
    );
    console.log(result);

    conn.release(); // 연결 종료
    
};

module.exports = {createMember};