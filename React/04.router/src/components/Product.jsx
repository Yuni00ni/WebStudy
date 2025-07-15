import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

const Product = () => {
    /* useParams
        url의 파라미터 정보를 가져올 수 있다
        물품의 고유한 값을 설정 / 출력하는 데 사용
        useParams의 값 설정은 하나만 가능 => 해당 컴포넌트가 가지고 있는 고유한 성질을 담을 때 사용 => 학번, 사번, 주민번호

        useSearchParams (url 버전의 useState이라고 생각하면 될듯 코드 작성 방식이 거의 유사함 변수 이름만 고정)
        라우터 사용시 QueryString 정보를 가져와서 관리하고 싶을 때 url 뒤에 ?속성=값&속성=값.....
        인기글, 신규글, 카테고리화
    */
    let { num } = useParams()
    console.log('게시물 번호', num);

    // 변수 이름 고정 => state처럼 사용
    const [query, setQuery] = useSearchParams()

    // boolean타입으로 확인
    console.log('인기글 파악 여부', query.get('best'));

    return (
        <div>
            {num}번째 게시물 입니다.
        </div>
    )
}

export default Product