/*
    DOM : Document Object Model
    - Document : html 문서
    - Object : JS 객체
    => 쪼개진 결과를 노드라고 함 => 최상위 노드 : document 객체
    => 내가 만약 HTML 문서를 무언가 바꿔주고 싶다? -> 무조건 document로 가야함!

    ex) <h1 id="h1Tag">안녕하세요.</h1> -> 쪼개기
    h1(태그), id(속성), hiTag(속성값), 안녕하세요.(contents)
    => 사용이유는? 요소를 효과적으로 제어하기 위해서
*/

// STEP 1. id가 h1Tag인 요소를 가지고오자!
// 1) HTML 문서에 접근 : document
// 2) 객체에 접근 : .
// 3) 가지고 오다 : get
// 4) 요소를 : Element
// 5) ~ 통해서 : by~
let h1Tag = document.getElementById('h1Tag');
console.log(h1Tag);

// STEP 2. 내가 가져온 요소에서 contents만 가져와보자!
// 안에 있는(inner) + 텍스트만 보여줘(Text) => innerText
let h1Contents = h1Tag.innerText;
console.log(h1Contents);

// STEP 3. 내가 가져온 요소에서 contents를 수정해보자!
h1Tag.innerText = '안녕히가세요.'

h1Tag.innerText = '<a href="#">안녕히가세요.</a>'

h1Tag.innerHTML = '<a href="#">안녕히가세요.</a>'

// 클래스를 통해서 요소를 가져와보자!
// STEP 1. class가 pTag인 요소를 가지고와보자.
// 1) HTML 문서에 접근 : document
// 2) 객체에 접근 : .
// 3) 요소를 가지고오겠다. : getElements
// 4) 클래스를 통해서 : ByClassName

// id는 한 페이지 당 중복이 없기 때문에 getElement로 요소 1개를 가져올 수 있지만
// class나 TagName이나 Name 같은 경우에는 한 페이지에 여러 개가 있을 가능성이 존재
// (그래서 하나만 가지고 오지 않음)
// getElements를 통해서 여러 요소를 ★ 배열과 유사한 형태 ★ 로 가져온다.

let pTagClass = document.getElementsByClassName('pTag');
console.log(pTagClass);
console.log(pTagClass[0]);

// HTMLCollection 이란? 유사배열 -> 인덱스번호를 통해서 접근

// STEP 2. class가 pTagClass인 0번째 요소의 내용을 수정해보자!
pTagClass[0].innerText = '제 이름은 채수민입니다.'

// STEP 3. class가 pTag인 모든 요소를 가져와보자!
for(let i=0; i<pTagClass.length; i++){
    console.log(pTagClass[i].innerText);
}