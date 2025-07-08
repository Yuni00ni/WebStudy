import React from 'react'

const Member = ({ team, name }) => {

    // 객체형태로 css적용
    let boxStyle = {
        backgroundColor: 'whitesmoke',
        border: '1px solid black',
        textAlign: 'center',
        marginTop: '10px',
        padding: '30px',
        borderRadius: '10px'
    }
    return (
        <div>
            <div class="member" style={boxStyle}>
                <p>{team} {name}</p>
            </div>
        </div>
    )
}

export default Member