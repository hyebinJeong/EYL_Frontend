import { defineStore } from 'pinia';
import api from '@/api';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),
  actions: {
    // 세션 기반 로그인 상태 유지 확인
    async fetchUser() {
      try {
        const res = await api.get('/users/me');
        this.user = res.data;
        this.isLoggedIn = true;
      } catch (err) {
        this.user = null;
        this.isLoggedIn = false;
      }
    },

    // 로그아웃 처리
    async logout() {
      try {
        await api.post('/users/logout'); // 백엔드 세션 삭제 요청
      } catch (err) {
        console.error('로그아웃 실패:', err);
      } finally {
        this.user = null;
        this.isLoggedIn = false;
      }
    },
  },
});
