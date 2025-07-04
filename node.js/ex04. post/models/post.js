// 게시물 요청 처리할 모델(post)
const { DataTypespes, json } = require('sequelize');
const sequelize = require('../db/sequelize');

// Post 테이블(게시물 저장) 정의
// 게시물번호(식별자 - PK) : 1 ~ 자동증가
// 게시물제목(문자열, NN)
// 게시물내용(문자열 - 크기가 큰, NN)
// 작성자(문자열, NN)
// 이미지 파일 이름(문자열) -> 이미지파일(서버공간)
// 작성일자(날짜) : 오늘 날짜 자동으로 넣어줌
const Post = sequelize.define('Post', {
    id: { // 게시물 번호
        type: DataTypespes.INTEGER,
        autoIncrement: true, // 자동 증가
        primaryKey: true // PK 설정
    },

    title: { // 게시물 제목
        type: DataTypespes.STRING, // 최대 크기 255
        allowNull: false // NN
    },

    content: { // 게시물 내용
        type: DataTypespes.TEXT, // 최대 크기 65,535
        allowNull: false
    },

    writer: { // 작성자
        type: DataTypespes.STRING,
        allowNull: false
    },

    img: { // 이미지파일 이름, 확장자
        type: DataTypespes.STRING,
        allowNull: true // Null 허용
    },

    createdAt: { // 작성일자
        type: DataTypespes.DATE,
        defaultValue: DataTypespes.NOW // 현재 시간 자동 작성
    }
}, {
    tableName: 'post', // 실제 DB 테이블 이름
    timestamps: false // createdAt(최초 추가), updatedAt(수정)
});


module.exports = Post;