// user관련 처리 모델
const pool = require('../db/mysql-conn');

async function loginUser(id, pw) {
    const conn = await pool.getConnection();

    try {
        const [result] = await conn.execute('select * from member id = ? and pw = ?', [id, pw]);
        // commit(insert, update, delete => 테이블에 변경사항이 발생함)
        // auto commit
        return result; // 사용자 정보가 json형태로 저장되어 있는 배열 1개

    }finally{
        conn.release();
    }


}

module.exports = {loginUser};