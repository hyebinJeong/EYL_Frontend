// Pinia의 스토어 정의 함수 import
import { defineStore } from 'pinia';
// Axios 인스턴스를 가져와 API 호출에 사용
import api from '@/api';

// 'auth'라는 이름의 인증 관련 스토어 정의
export const useAuthStore = defineStore('auth', {
  // 상태 정의
  state: () => ({
    isLoggedIn: false, // 로그인 상태 여부
    user: null,        // 사용자 정보 객체
  }),

  // 상태를 변경하는 메서드들 정의
  actions: {
    // 로그인 처리 함수
    // 이메일과 비밀번호를 받아 로그인 요청을 보냄
    // 로그인 성공 후 사용자 정보를 불러오고 로그인 상태로 전환
    async login(email, password) {
      await api.post('/users/login', { email, password }); // 서버에 로그인 요청 (세션 쿠키 발급)
      await this.fetchUser(); // 로그인 성공 후 사용자 정보 불러오기
      this.isLoggedIn = true; // 로그인 상태를 true로 설정
    },

    // 사용자 정보 조회 함수
    // 세션 쿠키를 통해 서버에서 사용자 정보를 요청하고 상태에 저장
    async fetchUser() {
      try {
        const res = await api.get('/users/me'); // 세션이 유효한 경우 사용자 정보 반환
        this.user = res.data; // 사용자 정보를 상태에 저장
        this.isLoggedIn = true; // 로그인 상태로 설정
      } catch {
        // 세션 만료 또는 오류 발생 시 로그인 상태 초기화
        this.user = null;
        this.isLoggedIn = false;
      }
    },

    // 로그아웃 처리 함수
    // 서버에 로그아웃 요청을 보낸 후 상태 초기화
    async logout() {
      try {
        await api.post('/users/logout'); // 서버에 로그아웃 요청 (세션 삭제)
      } finally {
        // 서버 응답과 관계없이 상태 초기화
        this.user = null;
        this.isLoggedIn = false;
      }
    },
  },
});
