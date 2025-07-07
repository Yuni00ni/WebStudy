import React from 'react'

const App3 = () => {

    // 사용자가 입력할 수 있는 창을 만들기(입력문) -> prompt
    let name = prompt('이름을 입력하세요')

    // 내장객체 불러오기
    let today = new Date()

    // 현재 날짜를 반환
    let date = today.toLocaleDateString()
    console.log(date);

    // 현재 달 가져오기
    let month = today.getMonth() + 1
    console.log(month);

    // 조건문에 사용할 변수 만들기
    let season = ''

    // 계절을 판단하는 로직(조건문) 만들기
    if(month == 3 || month == 4 || month == 5){
        season = '봄'
    }else if(month == 6 || month == 7 || month == 8 ){
        season = '여름'
    }else if(month == 9 || month == 10 || month == 11){
        season = '가을'
    }else if(month == 12 || month == 1 || month == 2){
        season = '겨울'
    }

    console.log(`${name}님 지금은 ${season}입니다. 좋은 하루 보내세요:)`);
    
    return (
        <div>

        </div>
    )
}

export default App3