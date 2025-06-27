const http = require('http');
const url = require('url');
const fs = require('fs').promises;

http.createServer(async (req, res) => {
   // 요청 url에 따라서 다른 html이 응답되도록 작성 
    const parseUrl = url.parse(req.url, true);
    console.log(parseUrl);

    const pathName = parseUrl.pathname; // 요청 url(경로만) (쿼리 xx)
    let file; // 변수
    if(pathName == '/join'){
        // join.html 파일 읽어와서 응답
        file = await fs.readFile('./join.html');
    }else if(pathName == '/login'){
        // login.html 파일 읽어와서 응답
        file = await fs.readFile('./login.html');

    }
    // /join or /login 이 아닌 주소로 요청이 들어왔을 때 읽어오는 파일이 없음
    // 아래쪽에서 무조건 file을 응답하고 있는데 읽어온 파일이 없으면 오류가 발생함

    // 응답 -> 읽어온 파일이 있을 경우에만 응답
    if(file){ // 읽어온 파일이 있으면 if절 안에 로직을 실행
        res.writeHead(200, {'Content-Type' : 'text/html; charset=UTF-8'});
        res.write(file);
        res.end();

    }

}).listen(8888, () => {
    console.log('Server is running on http://localhost:8888');
});