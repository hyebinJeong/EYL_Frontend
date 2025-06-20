<template>
  <!-- 전체 화면 기준 수직/수평 정렬 + 상하 여백 -->
  <div class="min-h-screen flex flex-col items-center py-24">
    <!-- 로그인 카드 박스 -->
    <div class="bg-white p-8 rounded-lg max-w-sm w-full">
      <h2 class="text-xl font-semibold mb-6 text-center">로그인</h2>

      <!-- 로그인 폼 -->
      <form class="space-y-4">
        <!-- 아이디 입력 필드 -->
        <input
          type="text"
          placeholder="아이디를 입력하세요"
          class="w-full border border-gray-400 rounded-full px-4 py-2 outline-none"
        />

        <!-- 비밀번호 입력 필드 -->
        <input
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

          <!-- 회원가입 링크 -->
          <RouterLink
            to="/signup"
            class="w-1/2 text-center bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-full font-semibold"
          >
            회원가입
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
// RouterLink 컴포넌트로 페이지 이동
import { RouterLink } from 'vue-router'
</script>
