// src/api/auth.js

import api from './index'; // axios 인스턴스 불러오기

/**
 * 로그인 요청
 * @param {string} email - 이메일(아이디)
 * @param {string} password - 비밀번호
 * @returns {Promise} - 로그인 결과 (세션 쿠키 포함)
 */
export const login = (email, password) => {
  return api.post('/users/login', { email, password });
};

/**
 * 회원가입 요청
 * @param {Object} userData - 회원가입 데이터
 * @param {string} userData.email
 * @param {string} userData.password
 * @param {string} userData.nickname
 * @param {string} userData.address
 * @param {string} userData.phone
 * @param {string} userData.role - 일반 회원인지 판매자인지
 * @returns {Promise}
 */
export const signup = userData => {
  return api.post('/users/signup', userData);
};

/**
 * 로그아웃 요청
 * @returns {Promise}
 */
export const logout = () => {
  return api.post('/users/logout');
};

/**
 * 닉네임 중복 확인
 * @param {string} nickname - 확인할 닉네임
 * @returns {Promise}
 * 서버에서 nickname이 존재하는지 확인
 * 예: GET /users/check-nickname?nickname=규리
 */
export const checkNicknameDuplicate = nickname => {
  return api.get('/users/check-nickname', {
    params: { nickname },
  });
};

/**
 * 이메일(아이디) 중복 확인
 * @param {string} email - 확인할 이메일
 * @returns {Promise}
 * 예: GET /users/check-username?username=test@email.com
 */
export const checkUsernameDuplicate = email => {
  return api.get('/users/check-username', {
    params: { username: email },
  });
};

// 사용자 정보 조회 API도 여기에 추가 가능
// 예: export const fetchMyInfo = () => api.get('/users/me');
