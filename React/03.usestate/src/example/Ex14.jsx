import React, { useState, useEffect, useActionState, useSyncExternalStore } from 'react'
import axios from 'axios'
import { API_KEYS } from '../config/config'

const Ex14 = () => {
    /*
    API 호출을 통해서 데이터를 주고 받는 방법 : fetch, axios
    fetch :
        장점 :
                    1. JS 자체 내장 라이브러리로 별도의 설치 X
                    2. 속도가 상대적으로 빠름
        단점 :
                    1. 지원이 되지 않는 브라우저가 존재
                    2. JSON 변환 작업 필요

    axios :
        장점 :
                    1. fetch보다 상대적으로 다양한 기능
                    2. 다양한 브라우저에서 사용 가능
                    3. 자동으로 JSON 변환
        단점 :
                    1. 별도 설치(npm i axios)
                    2. 속도가 상대적으로 조금 느림
    */

    const [movieList, setMovieList] = useState([])

    // useEffect 생성
    useEffect(() => {
        let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${API_KEYS.API_KEY}&targetDt=20250713`
        // axios를 이용해서 API 호출 후 데이터 가져오기
        axios
            .get(url)
            .then((res) => {
                console.log(res.data.boxOfficeResult.dailyBoxOfficeList);
                
            })
    }, [])

    return (
        <div>Ex14</div>
    )
}

export default Ex14