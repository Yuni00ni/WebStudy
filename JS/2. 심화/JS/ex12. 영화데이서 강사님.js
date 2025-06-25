import {moviekey} from '../config.js';

// 1. 버튼 클릭 시, 영화정보를 서버로부터 받아온 후
//      웹 페이지에 출력하는 프로그램 구현
//      각 요소에 접근
let movieListDiv = document.getElementById('movie-list');
let reqBtn = document.getElementById('req_btn');

let movieURL = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=' + moviekey + '&targetDt=20250623';


// 2. fetch API 사용해서 데이터 가져오기
const getMovieData = async () => {
    let res = await fetch(movieURL);
    let data = await res.json();
    console.log('영화정보 : ', data);
    
    // 3. 가져온 데이터 변수에 저장(movieList)
    // 데이터 접근 -> boxOfficeResult -> dailyBoxOfficeList
    
    let movieList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(movieList);
    
    // 4. 데이터 표 형식으로 출력
    let resultHTML = '<table border="1">'
    resultHTML += '<tr><th>순위</th><th>영화명</th><th>개봉일</th></tr>'
    for(let i = 0; i < movieList.length ; i++) {
            resultHTML += '<tr>'
            resultHTML += `<td>${movieList[i].rank}</td>`
            resultHTML += `<td>${movieList[i].movieNm}</td>`
            resultHTML += `<td>${movieList[i].openDt}</td>`
            resultHTML += '</tr>'
        }
        
        resultHTML += '</table>'
        movieListDiv.innerHTML = resultHTML;
    }
    
    // 4-1. 버튼을 눌렀을 때, 표가 나와야하므로 이벤트 처리가 필요
    reqBtn.addEventListener('click', getMovieData);
