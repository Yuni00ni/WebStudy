// 1. 가져온 url movieURL 이라고 하는 변수에 저장
let movieURL = 'https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=0170eee9fa98a2d950aaa0575e7d94d1&targetDt=20250623';

// fetch API : 비동기 통신을 위한 문법
//                  Client와 Server 사이에 데이터를 주고받기 위한 비동기 통신 API
// 반환 타입 : Promise 객체 -> text(), json()


// fetch(movieURL) // -> 서버 요청
// .then((res)=>res.text())
// .then((res)=>res.json()) // -> 응답을 json 형식으로 파싱
// .then((data) => console.log(data)) // -> json 데이터 사용
// .catch((error) => console.log(error)) // -> 에러 처리


// then -> 요청 성공 시, 응답 처리(성공했을 때 실행하는 함수)
// 첫번째 then -> json 데이터 파싱(응답을 받아서 json형식으로 변환)
// 두번째 then -> 파싱된 데이터를 출력(변환된 실제 데이터를 출력)
// => then 2번 이유 : 한 번에 다 할 수 없어서 나눠서 처리

// catch -> 요청 실패 시, 에러 처리(실패했을 때 실행되는 함수)
// 네트워크 오류, 서버 문제, json 파싱 실패 등....
// 맨 마지막에 한 번만 쓰면, 앞에서 생긴 어떤 에러든지 모두 잡아줄 수 있음

// text() : 문자열 데이터 반환
// json() : json 데이터 반환

// async & await '예약어'를 활용한 비동기 통신
// -> fetch API의 문법을 간결화하기 위한 예약어
// await 예약어는 async로 정의된 함수 내에서만 사용이 가능
const getMovieData = async () => {
    // 서버로부터 응답이 올 때까지 잠시 대기! -> await
    let res = await fetch(movieURL);
    let data = await res.json();
    console.log('영화 정보 : ', data);
    
}
getMovieData();