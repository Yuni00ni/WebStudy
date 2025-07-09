import React, {useState} from 'react'
import data from '../json/ex05data.json'
import Ex05map from '../components/Ex05map.jsx'

const Ex05 = () => {
    return (
        <div>
            <h1>Map 실습</h1>
            <div>
                {/* 우리가 가지고온 json파일을 활용해서 하위 컴포넌트로 값을 전달하기 */}
                {data.result.map((item) => (
                    <Ex05map key={item.title} item={item}></Ex05map>
                    
                    
                ))}
                
                
            </div>
        </div>
    )
}

export default Ex05