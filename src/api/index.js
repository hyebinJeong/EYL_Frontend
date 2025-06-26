// src/api/index.js
import axios from 'axios'

// axios 인스턴스 생성
const api = axios.create({
  baseURL: '/api',        // 기본 API 주소 (Vite 등에서 proxy 설정에 따라 변경 가능)
  withCredentials: true,  // 쿠키가 필요한 요청에 포함 (로그인 세션 유지용)
})

export default api
