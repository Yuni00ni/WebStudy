import React, { useState, useEffect } from 'react'

const Ex13 = () => {
  console.log("a. 함수초기화");

  const [num, setNum] = useState(0)

  const btnCk = () => {
    setNum(num + 1)
  }

  // userEffect(() => {}, [])
  // [ 변화를 감지할 대상 ] 의존성 배열
  // 배열 안 데이터는 복수개로 처리 가능
  // API호출 할 때 사용 => 작업 처리가 다른 코드들 보다 조금 느린 편에 속함

  // API 호출 시 아래와 같이 사용
  useEffect(() => {
    console.log('c. Mount');

  }, [])

  // useState 사용 시 아래와 같이 사용
  // num이라는 state가 변할때마다 실행되는 출력문
  useEffect(() => {
    console.log('update');

  }, [num])

  return (
    <div>
      {console.log('b. rendering')}

      <h1>function counter : {num}</h1>
      <button onClick={btnCk}>+1</button>
    </div>
  )
}

export default Ex13