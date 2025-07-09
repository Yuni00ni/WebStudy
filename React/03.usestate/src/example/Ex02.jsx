import React, { useState } from 'react'
// import pic from '../img/img1.gif'

const url = 'data:image/jpeg;base64,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'

const Ex02 = () => {

    // state 생성
    const [likeEmoji, setLikeEmoji] = useState('♡')
    const [likeNum, setLikeNum] = useState(0)

    // 버튼을 클릭했을 때 하트를 채우고, 숫자를 1로 변경
    // and 다시 클릭했을 때 원상태로 만드는 함수 제작

    const handleClick = () => {
        // 조건문으로 처리
        if (likeEmoji == '♡') {
            setLikeEmoji('♥')
            setLikeNum(likeNum + 1)
        } else if (likeEmoji == '♥') {
            setLikeEmoji('♡')
            setLikeNum(likeNum - 1)
        }
    }

    return (
        // React에서 이미지 경로를 설정하는 방법 3가지
        // 1. 외부주소로 접근 => src'주소값'
        // 2. src폴더에 이미지가 있다면? => import 이미지변수 from '파일의 경로'
        // 3. public폴더에 이미지가 있다면? => src'파일의 주소(경로)'
        // http://localhost:5173/img/img1.gif
        // public폴더는 서버와 통신중 => 이곳에 저장하게 되면 고유한 주소값 생성
        // 따로 import를 하지 않아도 된다!

        <div>
            {/* 외부주소로 접근 */}
            <img src={url} alt="" />
            <p>
                <span onClick={handleClick } style={{cursor : 'pointer'}}>{likeEmoji}  </span>
                <span>좋아요 {likeNum}개</span>
            </p>

            {/* src폴더 안에 있는 파일 접근 */}
            {/* <img src={pic} width='225px' height='225px' alt="" /> */}
            {/* public폴더 안에 있는 파일 접근 */}
            {/* <img src="/img/img1.gif" width='225px' height='225px' alt="" /> */}
        </div>
    )
}

export default Ex02