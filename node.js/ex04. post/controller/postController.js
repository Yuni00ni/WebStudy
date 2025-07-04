// post요청을 처리하는 컨트롤러
const { create } = require('../models/postModel');

async function createPost(req, res) {
    const post = req.body; // json(title, writer, content)
    const filename = req.file.filename; // 업로드한 이미지 파일 이름

    // 파일 이름까지 post json 객체에 추가
    post.img = filename;

    await create(post);

}

module.exports = { createPost };