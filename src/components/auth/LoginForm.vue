<!-- component/auth/LoginForm.vue -->
<!-- 로그인 폼과 실제 로그인 처리를 담당하는 컴포넌트 -->
<template>
  <!-- 로그인 카드 박스 -->
  <div class="bg-white p-8 rounded-lg max-w-sm w-full">
    <h2 class="text-xl font-semibold mb-6 text-center">로그인</h2>

    <!-- 로그인 폼 -->
    <form class="space-y-4" @submit.prevent="handleLogin">
      <!-- 아이디 입력 -->
      <input
        v-model="email"
        type="text"
        placeholder="아이디를 입력하세요"
        class="w-full border border-gray-400 rounded-full px-4 py-2 outline-none"
      />

      <!-- 비밀번호 입력 -->
      <input
        v-model="password"
        type="password"
        placeholder="비밀번호를 입력하세요"
        class="w-full border border-gray-400 rounded-full px-4 py-2 outline-none"
      />

      <!-- 버튼들 -->
      <div class="flex justify-between mt-4 space-x-2">
        <!-- 로그인 버튼 -->
        <button
          type="submit"
          class="w-1/2 bg-green-700 hover:bg-green-800 text-white px-4 py-2 rounded-full font-semibold"
        >
          로그인
        </button>

        <!-- 회원가입 페이지 이동 -->
        <RouterLink
          to="/signup"
          class="w-1/2 text-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold"
        >
          회원가입
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<script setup>
// 로그인 처리 로직 및 라우팅, 상태관리

import { ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { login } from '@/api/auth'; // 로그인 API 호출 함수
import { useUserStore } from '@/stores/user'; // 사용자 상태 관리

const email = ref('');
const password = ref('');

const router = useRouter();
const userStore = useUserStore();

// 로그인 처리 함수
const handleLogin = async () => {
  try {
    // 로그인 API 호출 (세션 생성)
    await login(email.value, password.value);

    // 세션 기반 사용자 정보 불러오기 (Pinia에 저장)
    await userStore.fetchUser();

    alert('로그인 성공!');
    router.push('/'); // 홈으로 이동
  } catch (err) {
    alert('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
    console.error(err);
  }
};
</script>
