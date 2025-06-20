console.log('배열 실습.js');

// 1. 사용자에게 과목 수 입력 받기
let subjectCount = Number(prompt('과목 수를 입력해주세요'));

console.log(subjectCount);
// 2. 과목 이름과 점수 저장할 배열 생성
let subjectName = [];
let subjectScore = [];
// 3. 과목 수만큼 과목명과 점수 입력 받기
for(let i = 0; i < subjectCount; i++) {
    let name = prompt('점수를 입력할 과목명을 입력해주세요 >> ');
    let score = parseInt(prompt(`${name} 과목의 점수를 입력해주세요 >> `));

    subjectName[i] = name;
    subjectScore[i] = score;
}

console.log(`과목들 : ${subjectName} \n 점수들 : ${subjectScore}`);

// 4. 총합
let sum = 0;
for(let i = 0; i < subjectCount; i++) {
    sum += parseInt(subjectScore[i]);
}
console.log('총 합 : ', sum);


// 5. 평균 계산(소수점 이하 버리기)

let avg = sum / subjectCount;
console.log('평균 점수 : ', parseInt(avg));


// 6. 입력 받은 과목명과 점수를 표로 출력

document.write("<table border = '1'>");
document.write("<tr>");
for(let i = 0; i < subjectCount; i++) {
    document.write(`<td> ${subjectName[i]} </td>`);
    
}
document.write("<td> 총합 </td>");
document.write("<td> 평균 </td>");
document.write("</tr>");

document.write("<tr>");
for(let i = 0; i < subjectCount; i++) {
    document.write(`<td> ${subjectScore[i]} </td>`);
}
document.write(`<td> ${sum} </td>`);
document.write(`<td> ${parseInt(avg)} </td>`);
document.write("</tr>");
document.write("</table>");