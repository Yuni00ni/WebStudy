// 이 파일은 mysql과 연결을 위해서 사용하는 module파일입니다.

const mysql = require('mysql2/promise');

// 우리가 원하는 mysql과 connec할 수 있는 ConnctionPool 생성
// host, username, password, database(schema)
const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'node'
});

module.exports = pool;