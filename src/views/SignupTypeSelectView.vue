<!--  SignupTypeSelectView.vue -->
<template>
  <!-- 화면 전체를 가운데 정렬하며 적용 -->
  <div class="min-h-screen flex justify-center items-center relative">
    <!-- 홈으로 이동하는 EYL 텍스트 (왼쪽 상단 고정) -->
    <RouterLink to="/">
      <h2
        class="text-5xl font-bold absolute top-8 left-8 "
      >
        EYL
      </h2>
    </RouterLink>

    <!-- 흰색 박스 영역: 이미지 + 버튼 포함 -->
    <div
      class="bg-white w-[900px] p-12 rounded-lg flex items-center justify-between"
    >
      <!-- 좌측: 이미지 -->
      <div class="w-1/2 flex justify-center">
        <img src="@/assets/signup-box.png" alt="채소박스 이미지" />
      </div>

      <!-- 우측: 회원 유형 선택 버튼 -->
      <div class="w-1/2 text-center space-y-6">
        <h1 class="text-2xl font-bold mb-4">회원 유형을 선택하세요</h1>

        <!-- 일반회원 / 사업자 회원 선택 버튼 -->
        <div class="space-x-4">
          <!-- 일반회원 -->
          <RouterLink
            to="/signup/user"
            class="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full font-semibold"
          >
            일반회원
          </RouterLink>

          <!-- 사업자 회원 -->
          <RouterLink
            to="/signup/seller"
            class="bg-green-800 hover:bg-green-900 text-white px-6 py-2 rounded-full font-semibold"
          >
            사업자 회원
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
