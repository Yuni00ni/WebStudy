// 내가 좋아하는 포켓몬 1위부터 3위까지 후보로 두고, 하나씩 출력해보자!
// 1. pokemon 이라는 배열 안에 3개의 포켓몬 정보를 저장
// 2. 이 때, 1개의 포켓몬 당 저장되는 정보는 3개
//   - name(이름), type(타입), img(이미지 경로)
let pokemon = [
    {
        name : '쥬레곤',
        type : '물',
        img : 'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008701.png'
    },
    {
        name : '메가거북왕',
        type : '물',
        img : 'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/000902.png'
    },
    {
        name : '단데기',
        type : '벌레',
        img : 'https://data1.pokemonkorea.co.kr/newdata/pokedex/full/001101.png'
    }
]
// document.write('<img src=https://data1.pokemonkorea.co.kr/newdata/pokedex/full/008701.png></img>')


// 3. 사용자에게 확인할 포켓몬 번호를 입력 받기
//    '확인할 포켓몬 (1~3)'
// 4. 우리가 가진 인덱스 번호는 0~2, 사용자에게 받은 숫자 1~3 => 어떤한 처리
//   + prompt 를 통해 받았으면 -> 형변환 필요
let num = Number(prompt('확인할 포켓몬 (1~3)'))-1;
console.log('num : ', num);
console.log('num : ', pokemon[num]);

// 5. [결과 출력]
//    문서 -> document.write()
//    이 때, img 태그의 width 값을 100px
//    p태그에 포켓몬의 이름과 타입을 작성
// 6. 사용자가 1~3 외에 다른 번호를 입력하면 p태그로
//   -> 죄송합니다. 잘못입력하셨습니다.
if(num < 3 && num >= 0){
    document.write(`
            <img width="100px" src=${pokemon[num].img}></img>
            <p>${pokemon[num].name} (타입 : ${pokemon[num].type})</p>
        `);
} else{ // 잘못입력했을 경우
    document.write('<p>죄송합니다. 잘못입력하셨습니다.</p>');
}