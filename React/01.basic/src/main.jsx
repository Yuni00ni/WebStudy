import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 이거 안쓸거에요 주석처리함
// import './index.css'

// 상대경로를 작성해서 파일의 위치를 확인 후 임포트하기
import App from './App2.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
