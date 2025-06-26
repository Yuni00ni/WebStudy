const http = require('http');

// 파일 관련 작업은 비동기 처리 (파일을 전부 가져왔는 지 확인 후에 사용 => 콜백함수) => node 10버전 이후부터는 async/await 문법을 많이 사용함(promises)
// 파일시스템(fs) 모듈
const fs = require('fs').promises; // 비동기 처리를 위함

http.createServer(async (req, res) => {

    // async/await 사용법
    // async : await을 포함하고 있는 함수 앞쪽에 붙임
    // await : 기다려야 하는 함수 앞쪽에 붙임
    // ex03.html 파일 읽어오기
    const file = await fs.readFile('./ex03.html'); // 상대경로 작성

    // html 파일을 응답 
    // 응답(response) : 패킷사용하여 응답(Head -> 응답 코드, 응답 데이터 형식 / Body -> 응답 본문)
    // 200(OK), 400(Bad Request), 404(Not Found)... (HTTP 상태코드)
    res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});
    res.write(file);
    res.end(); // 응답처리

}).listen(8888, () => {
    console.log('Server is running on http://localhost:8888');
    
});