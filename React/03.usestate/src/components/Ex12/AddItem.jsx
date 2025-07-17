import React, { useState, useContext } from 'react'
import { TodoContext } from '../../context/EX12TodoContext'
// 필요한 파일, 기능들 불러오기

const AddItem = () => {
  // context안에 있는 값 가져오기 => newTodo, setNewTodo, handleNewTodoAddition
  const { newTodo, setNewTodo, handleNewTodoAddition } = useContext(TodoContext)
  return (
    <div>
      <input type="text" onChange={(e) => { setNewTodo(e.target.value) }} value={newTodo} />
      <button onClick={handleNewTodoAddition}>Add</button>
    </div>
  )
}

export default AddItem