console.log('배열 실습.js');

// 1. 사용자에게 과목 수 입력 받기
let subject = Number(prompt('과목 수를 입력해주세요'));

console.log(subject);
// 2. 과목 이름과 점수 저장할 배열 생성
let subjectName = [];

// 3. 과목 수만큼 과목명과 점수 입력 받기
for(let i = 0; i >= subjectName.length; i++) {
    subjectName[i] = prompt('점수를 입력할 과목명을 입력해주세요 >> ');
}
// 4. 총합

// 5. 평균 계산(소수점 이하 버리기)

// 6. 입력 받은 과목명과 점수를 표로 출력