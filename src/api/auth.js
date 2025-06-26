// src/api/auth.js
import api from './index'  // axios 인스턴스 불러오기

/**
 * 로그인 API 호출 함수
 * @param {string} email - 로그인에 사용할 이메일(아이디)
 * @param {string} password - 비밀번호
 * @returns {Promise} axios 요청 Promise 반환
 */
export const login = (email, password) => {
  return api.post('/users/login', { email, password })
}

//  회원가입 요청 함수
export const signup = (userData) => {
  // userData = { email, password, nickname, address, phone, role }
  return api.post('/users/signup', userData)
}

/**
 * 회원가입, 로그아웃, 중복체크 등 API도 여기에 정의 할수 있다. 어떻게?? 어떡하지 어떻하지 
 */
