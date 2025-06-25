// movie url
let movieURL = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=0170eee9fa98a2d950aaa0575e7d94d1&targetDt=20250623';

// moviedata res & req
const getMovieData = async () => {
    // 서버로부터 응답이 올 때까지 잠시 대기! -> await
    let res = await fetch(movieURL);
    let data = await res.json();
    console.log('영화 정보 : ', data);
    
    // 데이터 표 만들기 순위 : rank, 이름 : movieNm, 개봉일 : openDt
    let movieDataList = data.boxOfficeResult.dailyBoxOfficeList; // 객체 내부 배열까지 접근해서 변수에 담기
    console.log(movieDataList); // 디버깅
    
    let movieList = document.getElementById('movie-list'); // html 내부 태그 id값으로 가져오기
    movieList.innerHTML = '<table border="1px solid black"> <th>순위</th><th>영화 이름</th><th>개봉일</th><tbody></tbody></table>' // innerhtml 이용해서 내부에 표 기본 틀 작성하기
    
    // ** innerhtml로 작성한 태그도 가져올 수 있음! 코드 진행 순서만 잘 맞춰주면 잘 동작함!
    let tbody = document.querySelector('tbody'); // 선택자 이용해서 방금 작성했던 movie-list 내부의 태그 중 tbody를 가져오기
    
    for(let i = 0; i < movieDataList.length; i++) {
        tbody.innerHTML += `<td>${movieDataList[i].rank}</td><td>${movieDataList[i].movieNm}</td><td>${movieDataList[i].openDt}</td>` // innerhtml 이용해서 tbody 내부에 들어갈 내용 반복문으로 작성하기
    }
}

// onclick event
const req_btn = document.getElementById('req_btn'); // html 내부 태그 id값으로 가져오기
req_btn.addEventListener('click', getMovieData); // 태그 클릭 시 이벤트 추가


