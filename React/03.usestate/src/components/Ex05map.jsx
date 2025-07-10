import React from 'react'
// npm install react-bootstrap bootstrap => bootstrap사용시 필요한 모듈들 불러오기
import 'bootstrap/dist/css/bootstrap.min.css'; // bootstrap css를 적용하는 코드
import { Card, Button } from 'react-bootstrap'

const Ex05map = ({ item }) => {
  console.log(item);

  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={item.imgSrc} height= '350px' />
      <Card.Body>
        <Card.Title>{item.title} {item.birthYear}</Card.Title>
        <Card.Text>
          {item.content}
        </Card.Text>
        <a href={item.SNS}><Button variant="warning">Instagram</Button></a>
      </Card.Body>
    </Card>
    
  )
}

export default Ex05map