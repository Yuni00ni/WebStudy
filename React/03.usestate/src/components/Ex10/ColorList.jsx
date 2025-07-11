import React, { useContext } from 'react'
import { ColorContext } from '../../context/Ex10ColorContext'

const ColorList = () => {
    // context를 사용하겠다 => import {useContext} from 'react'
    // 데이터 가져오기
    const { setChoicColor } = useContext(ColorContext)

    let color = ['red', 'orange', 'yellow', 'green', 'blue']
    const ck = (e) => {
        // 이벤트 객체를 통해서 div안에 색상 데이터를 가지고 오고, 가지고온 데이터를 set함수에 안에 넣어주기
        console.log('ck : ', e.target.style.backgroundColor);
        setChoicColor(e.target.style.backgroundColor)
    }
    return (
        <div style={{display : 'flex'}}>
            {/* map함수를 통해서 color변수 안에 있는 색상을 화면에 출력하기  높이 : '100px', 너비 : '100px' => div태그 5개*/}
            {color.map((item) => ( 
                <div onClick={ck} key= {item} style={{width: '100px', height : '100px', backgroundColor : item, margin : '3px', cursor : 'pointer'}}></div>
            ))}

        </div>
    )
}

export default ColorList