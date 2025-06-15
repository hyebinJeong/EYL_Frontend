<template>
  <!-- 제목과 로그인 버튼을 양쪽 끝에 정렬 -->
  <div class="p-8 flex justify-between items-center">
    <!-- 왼쪽 제목 -->
    <h1 class="text-5xl font-bold">EYL</h1>

    <!-- 오른쪽 로그인 버튼 -->
    <router-link to="/login">
      <button
        type="submit"
        class="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full font-semibold"
      >
        로그인
      </button>
    </router-link>
  </div>
</template>
