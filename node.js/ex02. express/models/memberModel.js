// member관련 sql문을 실행하는 파일입니다.

// DB 연결(모듈 가져오기)
const pool = require('../db/mysql-conn');

// 회원가입
async function createMember(id, pw, nick) { // creatMember(id, pw, nick)
    // 1. pool 사용해서 실제 연결
    const conn = await pool.getConnection();

    // try 구문 : 예외처리(오류예방) try ~ catch ~ finally
    // try : 무조건 실행해야하는 구문
    // catch : try부분에서 발생할 수 있는 오류를 처리하는 구문 -> try구문은 더이상 실행하지 않음
    // finally : try든 catch든 끝까지 처리한 후 제일 마지막에 무조건 실행해야하는 구문
    try{
        const result = await conn.execute(
            'INSERT INTO MEMBER(ID, PW, NICK) VALUES(?, ?, ?)',
            [id, pw, nick]
        );
        console.log(result);
        // result가 가지고 있는 값을 최종 결과값으로 사용!(app.js)
        return result;

    }finally{
        conn.release(); // 연결 종료

    }

    
};

module.exports = {createMember};