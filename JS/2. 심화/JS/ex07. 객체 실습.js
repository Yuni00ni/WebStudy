// 내가 좋아하는 포켓몬 1위부터 3위까지 후보로 두고, 하나씩 출력해보자!
// 1. pokemon 이라는 배열 안에 3개의 포켓몬의 정보를 저장
// 2. 이 때, 1개의 포켓몬 당 저장되는 정보는 3개
//  - name(이름), type(타입), img(이미지 경로)
let pokemon = [
    {
    name : '이상해씨',
    type : '풀/독',
    img : 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000101.png'
},
    {
    name : '파이리',
    type : '불꽃',
    img : 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000401.png'
},
    {
    name : '꼬부기',
    type : '물',
    img : 'https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/000701.png'
}
];

// document.write(`<img src="${pokemon[0].img}"></img>`);
// 3. 사용자에게 확인할 포켓몬 번호를 입력 받기
//      '확인할 포켓몬 (1 ~ 3)'
let userSelect = parseInt(prompt('확인할 포켓몬의 번호를 입력해주세요.(1 ~3)'));

console.log(userSelect);

// 4. 우리가 가진 인덱스 번호는 0 ~ 2, 사용자에게 받은 숫자는 1 ~ 3 => 어떠한 처리
//      + prompt를 통해 받았으면 -> 형변환 필요

// 5. [결과 출력]
//      문서 -> document.write();
//      이 때, img 태그의 width 값을 100px
//       p태그에 포켓몬의 이름과 타입을 작성
// 6. 사용자가 1 ~ 3 외에 다른 번호를 입력하면 p태그로
//      -> 죄송합니다. 잘못입력하셨습니다.

if(userSelect == 1 || userSelect == 2 || userSelect == 3) {
    document.write(` <img src="${pokemon[userSelect-1].img}"><br> ${pokemon[userSelect-1].name} (타입 : ${pokemon[userSelect-1].type})</p>`);
}else{
    document.write('<p>죄송합니다. 잘못입력하셨습니다.</p>');

}