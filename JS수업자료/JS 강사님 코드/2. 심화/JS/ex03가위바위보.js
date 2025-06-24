console.log('가위바위보 js');

// 지금부터 가위바위보 게임을 만들어보겠습니다.
// 1. arr 라는 배열 안에 '가위', '바위', '보' 라는 데이터를 넣습니다.
let arr = ['가위', '바위', '보'];

// 2. 사용자의 선택을 입력받습니다. -> myChoice
//      - 무엇을 내시겠습니까? (가위, 바위, 보)
let myChocie = prompt('무엇을 내시겠습니까? (가위, 바위, 보)');
console.log('m', myChocie);

// 3. 컴퓨터의 선택을 세팅합니다. -> comChoice
//      - 랜덤게임에서 사용했던 랜덤한 수 뽑기를 이용 (ranNum)
//      - 0,1,2 중 랜덤한 숫자를 뽑아서 그걸 인덱스 번호로 활용
//      - 가위, 바위, 보 가 랜덤하게 추출 -> comChoice
let ranNum = parseInt(Math.random()*3);
console.log('ran', ranNum);

let comChoice = arr[ranNum];
console.log('com', comChoice);

// 4. 문서에 (document.write) 나의 선택, 컴퓨터의 선택을 출력
document.write('나의 선택 : ', myChocie);
document.write('<br> 컴퓨터 선택 : ', comChoice);

// 5. 가위바위보의 결과 또한 문서에 출력 (result - 승리, 패배, 무승부, 게임오류)
//      - 가위바위보의 로직대로 승부 판정
//      - 사용자가 다른 걸 입력했을 때 '게임오류'
let result = '';
if(myChocie === comChoice){
    result = '무승부';
}else if(myChocie === '가위'){
    result = comChoice === '바위' ? '패배' : '승리'
    // if(comChoice === '바위'){
    //     result = '패배';
    // }else{
    //     result = '승리';
    // }
}else if(myChocie === '바위'){
    result = comChoice === '보' ? '패배' : '승리';
}else if(myChocie === '보'){
    result = comChoice === '가위' ? '패배' : '승리';
}else {
    result = '게임오류';
}
document.write('<hr> 결과는 ' + result + '입니다.');