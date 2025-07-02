const {createMember, loginMember, updateMember} = require('../models/memberModel');


// 회원가입 기능
async function join(req, res) {
    // 요청데이터 가져오기(body)
    console.log(req.body);
    const { id, pw, nick } = req.body;
    const result = await createMember(id, pw, nick); // 1 -> 회원가입 성공 / 0 -> 회원가입 실패

    console.log('result : ', result);

    if (result > 0) { // 1
        // 최초로 요청한 경로(/user/join)가 주소창에 그대로 남음
        // res.sendFile(path.join(__dirname, 'views', 'login.html'));
        // redirect 방식 : 클라이언트에게 특정 주소로 다시 요청하라고 응답하는 방식
        res.redirect('/login');
    } else { // 0
        // res.sendFile(path.join(__dirname, 'views', 'join.html'));
        res.redirect('/join');

    }

}

// 로그인 기능
async function login(req, res) {

    
    const { id, pw } = req.body;
    const result = await loginMember(id, pw);

    if (result.length > 0) {
        res.redirect('/');
    } else {
        res.redirect('/login');
    }

}

// 회원정보 수정 기능
async function update(req, res) {
    const { id, pw, nick } = req.body;
    await updateMember(id, pw, nick );
    
}

module.exports = {join, login, update};