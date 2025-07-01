const pool = require('../db/mysql-conn');

// 회원가입                     // 사용자가 입력한 값
async function createMember(id, pw, nick){
    // 1. Connect
    const conn = await pool.getConnection();

    // 2. SQL 실행
    const result = await conn.execute('insert into member(id, pw, nick) values(?, ?, ?)',
        [id, pw, nick]
    );

    console.log(result);
    
    // 3. 결과 처리

    // 4. 연결 해제
    conn.release();
};

module.exports = {createMember};