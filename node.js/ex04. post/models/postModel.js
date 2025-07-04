// sequelize 사용하여 post 요청을 처리하는 모델
const sequelize = require('../db/sequelize');
const Post = require('./post');

// 게시물 추가
async function create(newPost) {
    try {
        // 연결 확인
        await sequelize.authenticate();

        // 모델로 정의된 테이블 구조(post)를 실제 DB와 동기화
        await sequelize.sync({ alter: true });
        // create -> force : true => create()실행될 때마다 테이블을 새롭게 생성(drop -> create) => 매번 데이터가 다 삭제
        // alter -> alter : true => 기본 테이블은 유지하고 모델과 맞지 않은 부분만 자동 ALTER

        // 게시물 추가
        const result = await Post.create(newPost);
        console.log(result);

        return result;

    } catch (err) {
        console.log('create 실패', err);

    }


}

// 게시글 목록 불러오기
async function getPostAll() {
    try {
        await sequelize.authenticate();

        await sequelize.sync({ alter: true });

        const result = await Post.findAll();
        return result;
    } catch (err) {
        console.log('게시물 전체 불러오기 실패', err);

    }
}

// 게시글 상세 불러오기
async function getPostOne(id) {
    try {
        await sequelize.authenticate();

        await sequelize.sync({ alter: true });

        const result = await Post.findByPk(id);
        // fineOne({where:{title: '테스트'}}, attributes: ['writer']);
        return result;
    } catch (err) {
        console.log('게시물 상세 불러오기 실패', err);

    }
}
module.exports = { create, getPostAll, getPostOne };

