import React from 'react'

const Menubox = ({name, price, temp}) => {

    //  부모(상위)컴포넌트로부터 받아올 데이터는 매개변수를 통해서 가져올 수 있다
    // 넘어온 데이터 타입은 객체형태로 전달된다
    // props => {name : '아이스티', price : '5000', temp : 'ice'}

    return (
        <div>
            <div>
                <h3>{temp} {name}</h3>
                <p>{price}</p>
            </div>
        </div>
    )
}

export default Menubox