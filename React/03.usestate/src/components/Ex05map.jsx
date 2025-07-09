import React from 'react'

const Ex05map = ({item}) => {
  return (
    <div>
            <p>이름 : {item.title}</p>
            <p>출생년도 : {item.birthYear}</p>
            <p>소개 : {item.content}</p>
            <img src={item.imgSrc} alt="" />
            <br />
            <a href={item.SNS}>{item.SNS}</a>
    </div>
  )
}

export default Ex05map