// 표 형식으로 영화 순위, 영화 이름, 개봉일 th로 테이블 나열하기
// req_btn onclick 표 생성

// movie url
let movieURL = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=0170eee9fa98a2d950aaa0575e7d94d1&targetDt=20250623';

// moviedata res & req
const getMovieData = async () => {
    // 서버로부터 응답이 올 때까지 잠시 대기! -> await
    let res = await fetch(movieURL);
    let data = await res.json();
    console.log('영화 정보 : ', data);
    
    // 데이터 표 만들기 순위 : rank, 이름 : movieNm, 개봉일 : openDt
    let movieDataList = data.boxOfficeResult.dailyBoxOfficeList;
    console.log(movieDataList);
    
    let movieList = document.getElementById('movie-list');
    movieList.innerHTML = '<table border="1px solid black"> <th>순위</th><th>영화 이름</th><th>개봉일</th><tbody></tbody></table>'
    
    let tbody = document.querySelector('tbody');
    
    for(let i = 0; i < movieDataList.length; i++) {
        tbody.innerHTML += `<td>${movieDataList[i].rank}</td><td>${movieDataList[i].movieNm}</td><td>${movieDataList[i].openDt}</td>`
    }

    

    // '<table border="1px solid black"><th>순위</th><th>영화 이름</th><th>개봉일</th><tbody><td>' + movieList[i].rank + '</td><td>' + movieList[i].movieNm + '<td>'+ movieList[i].openDt + '</td></td></tbody></table>'
}
// onclick event
const req_btn = document.getElementById('req_btn');
req_btn.addEventListener('click', getMovieData);


