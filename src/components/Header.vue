<template>
  <!-- <header class="bg-white shadow-md"> -->
    <header class="bg-white">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- 왼쪽: 스토어 이름 -->
      <a href="/" class="text-xl font-bold text-gray-800 select-none">EYL</a>

      <!-- 가운데: 메뉴 -->
      <nav>
        <ul class="flex space-x-8 text-gray-700 font-semibold">
          <li><a href="/" class="hover:text-[#407536] select-none">Home</a></li>
          <li><a href="#" class="hover:text-[#407536] select-none">신상품</a></li>
          <li><a href="#" class="hover:text-[#407536] select-none">베스트</a></li>
          <li><a href="#" class="hover:text-[#407536] select-none">만원의 행복</a></li>
        </ul>
      </nav>

      <!-- 오른쪽: 장바구니 아이콘 + 사용자 프로필 -->
      <div class="flex items-center space-x-6 text-gray-700">
        <!-- 장바구니 아이콘 -->
        <button aria-label="장바구니" class="hover:text-[#407536]" @click="goCart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 7M7 13l-2 5m5 0a2 2 0 11-4 0m10 0a2 2 0 11-4 0"
            />
          </svg>
        </button>

        <!-- 사용자 프로필 아이콘 -->
        <button aria-label="사용자 프로필" class="hover:text-[#407536]" @click="goMyPage">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="none"
          >
            <circle cx="12" cy="8" r="4" />
            <path d="M6 20c0-3.333 5.333-5 6-5s6 1.667 6 5v1H6v-1z" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import {useRouter} from 'vue-router'

const router = useRouter()

function goCart() {
    router.push('/cart')
}

function goMyPage() {
  router.push('/mypage')
}
</script>
