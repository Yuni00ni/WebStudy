import React, { useContext, useState } from 'react'
import { ColorContext } from '../../context/Ex10ColorContext'

const ColorResult = () => {
    // 내가 만든 context를 사용하겠다
    const { choiceColor } = useContext(ColorContext)
    console.log('cC : ', choiceColor);
    
    return (
        <div>
            <div style={{width : '100px', height : '100px', backgroundColor : choiceColor}}>
                {/* 내가 클릭한 색상이 => state 안에 있음 
                    너비, 높이 100px 배경색 지정
                */}
            </div>
        </div>
    )
}

export default ColorResult