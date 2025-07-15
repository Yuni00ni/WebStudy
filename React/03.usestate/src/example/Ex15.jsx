import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../style/ex15.css'

const Ex15 = () => {
    // state 생성 => city, temp, icon, cloud
    // 초기값 => "gwangju", "0", "", ""
    const [city, setCity] = useState('gwangju')
    const [temp, setTemp] = useState('0')
    const [icon, setIcon] = useState('')
    const [cloud, setCloud] = useState('')

    // 도시의 이름을 가져오는 함수
    const getCity = (cityName) => {
        // 호출부에서 입력한 인자를 전달받아서 콘솔창에 찍어보기(3개도시)
        console.log(cityName);

        // city스테이트 안에 넣기
        setCity(cityName)
        // console.log(city);
    }

    // 응답받은 데이터를 처리하는 함수
    const getData = () => {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=603aa562f93c1b6e5fb4e7596aa820d5`

        // axios를 통해서 데이터를 요청하고 응답받기
        axios.get(url).then((res) => {
            console.log(res);
            // 구름의 양 출력
            console.log('weather res : ', res.data.clouds.all);
            // 온도 설정 -> (켈빈 온도 -273) = 섭씨온도
            // temp스테이트 안에 섭씨온도로 저장
            // console.log(res.data.main.temp - 273); # 확인용
            setTemp(parseInt(res.data.main.temp - 273))
            // console.log(temp); # 확인용

            // 아이콘 세팅
            // console.log(res.data.weather[0].icon); # 확인용
            setIcon(`https://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)

            // 구름의 양
            // 90 이상이라면 '매우 흐림'
            // 60 이상이라면 '흐림'
            // 30 이상이라면 '약간 흐림' 위의 조건 모두 다 부합하지 않을 시 '맑음'
            // 조건에 따라 출력되는 문자열 데이터를 cloud 스테이트 안에 저장
            let res_cloud = res.data.clouds.all

            if (res_cloud >= 90) {
                setCloud('매우 흐림')
            } else if (res_cloud >= 60) {
                setCloud('흐림')
            } else if (res_cloud >= 30) {
                setCloud('약간 흐림')
            } else {
                setCloud('맑음')
            }

        }).catch(() => {
            console.log('failed');

        })
    }

    // 화면이 마운트 됐을 때, getData 함수 호출
    useEffect(() => {
        getData()
    }, [city])

    return (
        <div className='weather-container'>
            <div className='weather-item'>
                <h1>날씨 확인</h1>
                <div className='weather-data'>
                    {icon && <img src={icon} width='100px' />}
                    <h1>{temp}</h1>
                    <h3>{city}</h3>
                    <h4>{cloud}</h4>
                </div>
                <div>
                    <button onClick={() => { getCity('gwangju') }}>광주</button>
                    <button onClick={() => { getCity('seoul') }}>서울</button>
                    <button onClick={() => { getCity('busan') }}>부산</button>
                </div>
            </div>
        </div>
    )
}

export default Ex15