const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'node'
});

// port : 3312 -> 포트 지적시 작성 필요! (3306이 아닌 경우)

module.exports = pool;