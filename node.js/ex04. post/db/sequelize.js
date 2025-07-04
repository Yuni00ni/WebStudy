// ORM Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('node', 'root', '1234', {
    host : 'localhost',
    dialect : 'mysql', // oracle ..
    logging : true // -> 내부적으로 실행되는 sql문을 출력
});

// port : 3312 -> 포트 지적시 작성 필요! (3306이 아닌 경우)

module.exports = sequelize;