// mysql 연결하는 모듈 불러오기
const mysql = require('mysql2')

// 데이터베이스 연결 => 객체 형태로 입력
// 실제 workbench 안에 있는 내용을 작성
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    port : 3306,
    database : 'node'
})

// 외부에서 사용할 수 있도록 내보내기
module.exports = conn