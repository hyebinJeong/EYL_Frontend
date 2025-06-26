// src/stores/authStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoggedIn: false,
    user: null,
  }),
  persist: true, // 로컬 스토리지에 상태를 저장
  actions: {
    login(userData) {
      this.isLoggedIn = true;
      this.user = userData;
    },
    logout() {
      this.isLoggedIn = false;
      this.user = null;
    },
  },
});
