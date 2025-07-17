import React, { useContext } from 'react'
import { TodoContext } from '../../context/EX12TodoContext'

// 상위컴포넌트에서 전달해준 값 받기(props)
const ListItem = ({ todo }) => {
  // context안에 있는 삭제 함수 가져오기
  const { handleTodoDelete, handleTodoToggle } = useContext(TodoContext)
  return (
    <>
      <tr>
        <td>
          <input type="checkbox" checked={todo.completed} onChange={() => { handleTodoToggle(todo.key) }} />
        </td>
        <td>
          <label style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            <span className='todo-text'>{todo.text}</span>
          </label>
        </td>
        <td>
          <button onClick={() => { handleTodoDelete(todo.key) }}>❌</button>
        </td>
      </tr>
    </>
  )
}

export default ListItem