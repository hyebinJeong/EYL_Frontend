// src/stores/user.js
import { defineStore } from 'pinia'
import api from '@/api'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    isLoggedIn: false,
  }),
  actions: {
    async fetchUser() {
      try {
        const res = await api.get('/users/me') //세션 기반 유지 확인?
        this.user = res.data
        this.isLoggedIn = true
      } catch (err) {
        this.user = null
        this.isLoggedIn = false
      }
    },
    logout() {
      this.user = null
      this.isLoggedIn = false
      api.post('/users/logout') // 세션 삭제
    },
  },
})
