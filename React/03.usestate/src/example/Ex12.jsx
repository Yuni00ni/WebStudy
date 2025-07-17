import React, { useState } from 'react'
import { TodoContext } from '../context/EX12TodoContext'
import List from '../components/Ex12/List'
import AddItem from '../components/Ex12/AddItem'
import '../style/ex12.css'

const Ex12 = () => {
    // 할 일들을 담아주는 배열 생성하기(useState)
    const [todos, setTodos] = useState([
        { text: '물 마시기', completed: false, key: 1 },
    ])

    // 할 일을 추가해주는 스테이트 생성
    const [newTodo, setNewTodo] = useState('')

    // newTodo 스테이트에 할 일들을 추가하는 함수 생성
    const handleNewTodoAddition = () => {
        console.log('handleNewTodoAddition', newTodo);
        // 입력한 값을 Todos에 추가하기
        setTodos([
            // 스프레드 문법 -> 배열안에 기존 데이터가 있다면 유지를 시키고 데이터를 추가한다
            ...todos,
            {
                text: newTodo,
                completed: false,
                key: todos.length > 0 ? todos[todos.length - 1].key + 1 : 1
            }
        ])
        setNewTodo('')
    }

    // 삭제기능 함수 제작
    const handleTodoDelete = (delkey) => {
        console.log('Delete function', delkey);
        // filter 함수를 사용해서 데이터 걸러주기
        const filterList = todos.filter((item) => (item.key !== delkey))
        setTodos(filterList)
    }

    // 완료한 일에 체크 혹은 반대의 경우 체크 해제 toggle함수
    const handleTodoToggle = (ckkey) => {
        console.log(ckkey);

        // find함수 사용 => 배열안에 내가 정해놓은 조건에 맞는 요소만 반환
        const targetTodo = todos.find((item) => (item.key === ckkey))
        console.log('targetTodo', targetTodo);

        if (targetTodo) {
            targetTodo.completed = !targetTodo.completed // 내가 누른 반대의 값을 대입
            setTodos([...todos]) // 기존의 데이터들은 그대로 유지한다
        }

    }

    return (
        <TodoContext.Provider value={{ todos, newTodo, setNewTodo, handleNewTodoAddition, handleTodoDelete, handleTodoToggle }}>
            <div className='todo-container'>
                <h1>😊 TODO LIST 😊</h1>
                <List></List>
                <AddItem></AddItem>
            </div>
        </TodoContext.Provider>
    )
}

export default Ex12