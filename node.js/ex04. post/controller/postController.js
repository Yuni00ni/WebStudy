// post요청을 처리하는 컨트롤러
const { create, getPostAll, getPostOne } = require('../models/postModel');

async function createPost(req, res) {
    const post = req.body; // json(title, writer, content)
    //{title: '제목', writer:'작성자'...}
    const filename = req.file.filename; // 업로드한 이미지 파일 이름

    // 파일 이름까지 post json 객체에 추가
    post.img = filename;

    const result = await create(post);

    if (result) {
        res.redirect('/');
    } else {
        res.redirect('/write');
    }

}

async function getPosts(req, res) {
    const result = await getPostAll();
    res.json(result);
}

async function getPostById(req, res) {
    //posts?id=1 (querystring => req.query)
    // posts/1(:id) (path variable)
    const {id} = req.params;
    const result = await getPostOne(id);
    res.json(result);

}
module.exports = { createPost, getPosts, getPostById };