import React, { useContext } from 'react'
import { TodoContext } from '../../context/EX12TodoContext'
import ListItem from './ListItem'

const List = () => {
  // 컨텍스트 사용 => todos라는 스테이트 변수 가져오기
  const { todos } = useContext(TodoContext)
  // 콘솔에 찍어보기
  console.log('todos', todos);


  return (
    <div>
      <table>
        <tbody>
          {/* todos라는 데이터가 베열인지 확인 후, map() 함수를 사용
              map함수를 사용해서 하위컴포넌트인 ListItem으로 이동
              props형식으로 전달
          */}
          {Array.isArray(todos) && todos.map((item) => (
            <ListItem todo={item} key={item.key} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default List