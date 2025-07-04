// user관련 처리할 컨트롤러

const { loginUser } = require('../models/userModel');
const session = require('express-session');


// 로그인 함수
async function login(req, res) {
    const { id, pw } = req.body;
    const [result] = await loginUser(id, pw);

    // 세션에 사용자 정보 저장(유지)
    if (result) { // 로그인 성공
        req.session.user = {
            id: result.id,
            nick: result.nick
        }

        // res.send('로그인 성공!'); // 텍스트 응답
        res.redirect('/');
    } else { // 로그인 실패
        // res.send('로그인 실패..');
        res.redirect('/login');
    }
};

function getSession(req, res) {
    res.json(req.session.user);
}

module.exports = { login, getSession}
