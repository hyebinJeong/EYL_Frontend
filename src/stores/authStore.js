// src/stores/authStore.js
import { defineStore } from 'pinia';
import api from '@/api';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: null,
  }),

  actions: {
    // 로그인 처리 함수
    async login(email, password) {
      try {
        await api.post('/users/login', { email, password });
        const user = await this.fetchUser();
        if (user) {
          this.isLoggedIn = true;
          this.user = user;
        } else {
          this.isLoggedIn = false;
          throw new Error('로그인 후 사용자 정보를 불러올 수 없습니다.');
        }
      } catch (error) {
        this.isLoggedIn = false;
        this.user = null;
        console.error('로그인 실패:', error);
        throw error;
      }
    },

    // 사용자 정보 조회 함수
    async fetchUser() {
      try {
        const res = await api.get('/users/me');
        this.user = res.data;
        return this.user;
      } catch (error) {
        this.user = null;
        this.isLoggedIn = false;
        return null;
      }
    },

    // 로그아웃 처리 함수
    async logout() {
      try {
        await api.post('/users/logout');
      } finally {
        this.user = null;
        this.isLoggedIn = false;
      }
    },
  },
});
