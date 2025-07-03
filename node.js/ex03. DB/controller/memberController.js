const { createMember, loginMember, updateMember, removeMember, getAllMember } = require('../models/memberModel');


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
    const [result] = await loginMember(id, pw);

    // 세션에 값 저장(로그인 성공 시)
    if (result) {
        req.session.loginMember = {
            id : result.id,
            nick : result.nick
        }
    }


    if (result) {
        res.redirect('/');
    } else {
        res.redirect('/login');
    }

}

// 회원정보 수정 기능
async function update(req, res) {
    const { id, pw, nick } = req.body;
    const result = await updateMember(id, pw, nick);

    if (result > 0) { // 1 수정 성공
        res.redirect('/');
    } else { // 0 수정 실패
        res.redirect('/update');
    }

}

// 회원탈퇴 기능
async function remove(req, res) {
    // get으로 요청하는 경우에는 queryString으로 데이터가 url에 포함되서 오기 때문에 req.query로 데이터 가져와야함
    const { id } = req.query;
    const result = await removeMember(id);

    if (result > 0) { // 탈퇴성공 -> join.html
        res.redirect('/join');
    } else { // 탈퇴실패 -> index.html
        res.redirect('/');
    }
}

// 회원목록 조회 기능
async function list(req, res) {
    const result = await getAllMember();
    // result 형태(josn Array)그대로 응답
    res.json(result); // json형태 데이터 응답
    // 'hello'같은 문자열을 보내고 싶을 때 res.send('hello'); 문자열로 응답
}

module.exports = { join, login, update, remove, list };