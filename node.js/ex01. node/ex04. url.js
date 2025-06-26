const http = require('http');

// url 모듈
const url = require('url');

http.createServer((req, res) => {

        const parseUrl = url.parse(req.url, true);
        console.log(parseUrl);
        
        // url => url(주소 : localhost:8888) + query parameter
        console.log('pathname : ', parseUrl.pathname); // 요청 기본 URL
        console.log('query : ', parseUrl.query); // query 빼오기
        
        

}).listen(8888, () => {
    console.log('Server is running on http://localhost:8888');
});