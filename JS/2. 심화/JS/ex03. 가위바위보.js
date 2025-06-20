// 지금부터 가위바위보 게임을 만들어보겠습니다.
// 1. arr 라는 배열 안에 '가위', '바위', '보' 라는 데이터를 넣습니다.
let arr = ["가위", "바위", "보"];

// 2. 사용자의 선택을 입력받습니다. -> myChoice
//      - 무엇을 내시겠습니까? (가위, 바위, 보)
let myChoice = prompt("무엇을 내시겠습니까? (가위,바위,보)");

console.log(myChoice);

// 3. 컴퓨터의 선택을 세팅합니다. -> comChoice
//      - 랜덤게임에서 사용했던 랜덤한 수 뽑기를 이용 (ranNum)
//      - 0,1,2 중 랜덤한 숫자를 뽑아서 그걸 인덱스 번호로 활용
//      - 가위, 바위, 보 가 랜덤하게 추출 -> comChoice
let comChoiceIndex = parseInt(Math.random()*3);
let comChoice = arr[comChoiceIndex];
console.log(comChoiceIndex);
console.log(comChoice);

// 4. 문서에 (docume)nt.write) 나의 선택, 컴퓨터의 선택을 입력
document.write('나의 선택 : ', myChoice);
document.write('<br>')
document.write('컴퓨터의 선택 : ', comChoice);
document.write('<br>')
document.write('<hr>')
// 5. 가위바위보의 결과 또한 문서에 출력 (result - 승리, 패배, 무승부, 게임오류)
//      - 가위바위보의 로직대로 승부 판정
//      - 사용자가 다른 걸 입력했을 때 '게임오류'
if(myChoice == comChoice) {
    document.write('결과는 무승부입니다.');
}else if(
    (myChoice == "가위" && comChoice == "바위"),
    (myChoice == "바위" && comChoice == "보"),
    (myChoice == "보" && comChoice == "가위")
) {
    document.write("결과는 패배입니다.");
}else if(
    (myChoice == "가위" && comChoice == "보"),
    (myChoice == "바위" && comChoice == "가위"),
    (myChoice == "보" && comChoice == "바위")
) {
    document.write("결과는 승리입니다.");
}else {
    document.write("게임오류 새로고침 해주세요.");
}