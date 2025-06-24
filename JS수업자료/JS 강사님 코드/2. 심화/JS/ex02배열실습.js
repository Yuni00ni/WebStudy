console.log('배열 실습 js');

// 1. 사용자한테 과목 수 입력 받기
let subNum = Number(prompt('과목 수를 입력해주세요.'));
console.log(subNum);

// 2. 과목 이름과 점수 저장할 배열 생성
let subjects =[]; // 과목의 이름
let scores = []; // 점수

// 3. 과목 수만큼 과목명과 점수 입력 받기
for(let i=0; i<subNum; i++){
    subjects[i] = prompt('점수를 입력할 과목명을 입력해주세요.');
    scores[i] = Number(prompt(subjects[i] + '의 점수를 입력해주세요.'));
    console.log(subjects[i], scores[i]);
}

// 4. 총합
let sum = 0;
for(let i=0; i<subNum; i++){
    sum += scores[i];
}

// 5. 평균 계산(소수점 이하 버리기)
let avg = 0;
let avg2 = sum/subNum;
for(let i=0; i<=avg2; i++){
    avg = i;
}

// 6. 입력 받은 과목명과 점수를 표로 출력
document.write('<table border="1px solid black"><tr>');
for(let i=0; i<subNum; i++){
    document.write('<th>' + subjects[i] + '</th>');
}
document.write('<th>총합</th><th>평균</th></tr><tr>');
for(let i=0; i<subNum; i++){
    document.write('<td>' + scores[i] + '</td>');
}
document.write('<td>' + sum + '</td><td>' + avg + '</td>');
document.write('</tr></table>');