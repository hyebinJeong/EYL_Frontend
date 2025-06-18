<template>
  <div class=" px-60 py-40 flex justify-between items-center">
    <!-- 왼쪽 텍스트 박스 -->
    <div class="max-w-md">
      <h1 class="text-5xl font-extrabold mb-4 leading-tight">
        필요한 상품을<br />
        신선하고 신속하게<br />
        받아보세요.
      </h1>
      <p class="text-gray-600 text-base mb-6 whitespace-pre-line">
        신선한 상품을 빠르게, 3초안에 받아볼수 있습니다. 그 어디에도 없던<br>
        신속함과 신선도, 저희가 보장합니다. 지금 바로 EYL을 경험하세요.
      </p>
      <router-link to="/login">
        <button
          type="submit"
          class="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full font-semibold"
        >
          로그인하기
        </button>
      </router-link>
    </div>

    <!-- 오른쪽 이미지 박스 -->
    <div class="max-w-sm">
      <img src="/src/assets/signup-box.png" alt="이미지" class="w-200 h-auto" />
    </div>
  </div>
</template>
