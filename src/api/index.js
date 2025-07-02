// src/api/index.js
import axios from 'axios';
import router from '@/router';
import { useAuthStore } from '@/stores/authStore';

const api = axios.create({
  baseURL: '/api',
  timeout: 5000,
  withCredentials: true, // 세션 쿠키 자동 포함
});

// 응답 인터셉터 – 세션 만료(401) 처리
api.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      const authStore = useAuthStore();
      authStore.logout(); // 상태 초기화
      alert('로그인이 만료되었습니다. 다시 로그인 해주세요.');
      router.push('/login');
    }
    return Promise.reject(error);
  },
);

export default api;
