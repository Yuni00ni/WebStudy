import React from 'react'

const Menubox = (props) => {
    console.log(props.name);
    console.log(props.prices);
    
    return (
        <div>
            <div>
                <h3>{props.temp} {props.name}</h3>
                <p>{props.price}</p>
            </div>
        </div>
    )
}

export default Menubox