import React, { useContext } from 'react'
import { ColorContext } from '../../context/Ex10ColorContext'

const ColorList = () => {
    // context를 사용하겠다 => import {useContext} from 'react'
    // 데이터 가져오기
    const { setChoicColor } = useContext(ColorContext)

    let color = ['red', 'orange', 'yellow', 'green', 'blue']

    return (
        <div>
            {/* map함수를 통해서 color변수 안에 있는 색상을 화면에 출력하기  높이 : '100px', 너비 : '100px' => div태그 5개*/}
            {color.map((item) => (
                <div key= {item} style={{width: '100px', height : '100px', backgroundColor : item, margin : '3px'}}></div>
            ))}

        </div>
    )
}

export default ColorList