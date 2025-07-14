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
                setMovieList(res.data.boxOfficeResult.dailyBoxOfficeList)


            })
            .catch(() => {
                console.log('failed');

            })
    }, [])

    return (
        <div>
            <h1>영화 순위</h1>
            <table border='1px'>
                <thead>
                    <tr style={{textAlign : 'center'}}>
                        <th>영화 순위</th>
                        <th>영화 이름</th>
                        <th>개봉일자</th>
                    </tr>
                </thead>
                <tbody>
                    {/* 우리가 가지고 온 데이터는 => state변수 안에 있는 상태
                        map함수를 통해서 데이터를 한꺼번에 처리
                        반복되는 한 줄을 만들고 => 세칸을 만들어서
                        영화 순위, 영화 이름, 영화 개봉일자 => 세 개의 데이터가 출력되게끔(rank, movieNm, openDt)
                        key={item.rnum(순번)}
                    */}
                    {movieList.map((item) => (

                        <tr key={item.rnum} style={{textAlign : 'center'}}>
                            <td>{item.rank}</td>
                            <td>{item.movieNm}</td>
                            <td>{item.openDt}</td>
                        </tr>
                    ))


                    }
                </tbody>
            </table>
        </div>
    )
}

export default Ex14