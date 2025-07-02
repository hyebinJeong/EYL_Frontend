<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <!-- 왼쪽: 스토어 이름 -->
      <a href="/" class="text-xl font-bold text-gray-800 select-none">EYL</a>

      <!-- 가운데: 메뉴 -->
      <nav class="bg-white">
        <ul class="flex space-x-8 text-gray-700 font-semibold relative">
          <li><a href="/" class="hover:text-[#407536] select-none">홈</a></li>

          <li class="relative group">
            <a href="#" class="hover:text-[#407536] select-none">카테고리</a>

            <!-- 드롭다운 -->
            <div
              class="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[280px] bg-white border border-gray-200 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 p-4 pointer-events-auto"
            >
              <ul class="flex flex-col gap-3 text-gray-700">
                <li>
                  <a
                    href="#"
                    @click.prevent="goCategory('CITRUS')"
                    class="block hover:bg-green-50 rounded-xl px-4 py-3 transition"
                  >
                    <div class="flex items-start gap-3">
                      <span class="text-lg">🍊</span>
                      <div>
                        <p class="text-sm font-semibold text-gray-800">
                          감귤류
                        </p>
                        <p class="text-xs text-gray-500 mt-0.5">
                          오렌지, 레몬, 라임, 자몽
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @click.prevent="goCategory('BERRIES')"
                    class="block hover:bg-green-50 rounded-xl px-4 py-3 transition"
                  >
                    <div class="flex items-start gap-3">
                      <span class="text-lg">🍓</span>
                      <div>
                        <p class="text-sm font-semibold text-gray-800">
                          베리류
                        </p>
                        <p class="text-xs text-gray-500 mt-0.5">
                          딸기, 블루베리, 라즈베리, 크랜베리
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @click.prevent="goCategory('STONE_FRUITS')"
                    class="block hover:bg-green-50 rounded-xl px-4 py-3 transition"
                  >
                    <div class="flex items-start gap-3">
                      <span class="text-lg">🍑</span>
                      <div>
                        <p class="text-sm font-semibold text-gray-800">
                          핵과류
                        </p>
                        <p class="text-xs text-gray-500 mt-0.5">
                          복숭아, 자두, 체리
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @click.prevent="goCategory('TROPICAL')"
                    class="block hover:bg-green-50 rounded-xl px-4 py-3 transition"
                  >
                    <div class="flex items-start gap-3">
                      <span class="text-lg">🥭</span>
                      <div>
                        <p class="text-sm font-semibold text-gray-800">
                          열대과일
                        </p>
                        <p class="text-xs text-gray-500 mt-0.5">
                          망고, 파인애플, 바나나, 파파야
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @click.prevent="goCategory('MELONS')"
                    class="block hover:bg-green-50 rounded-xl px-4 py-3 transition"
                  >
                    <div class="flex items-start gap-3">
                      <span class="text-lg">🍈</span>
                      <div>
                        <p class="text-sm font-semibold text-gray-800">
                          멜론류
                        </p>
                        <p class="text-xs text-gray-500 mt-0.5">
                          수박, 멜론, 참외
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @click.prevent="goCategory('POMES')"
                    class="block hover:bg-green-50 rounded-xl px-4 py-3 transition"
                  >
                    <div class="flex items-start gap-3">
                      <span class="text-lg">🍎</span>
                      <div>
                        <p class="text-sm font-semibold text-gray-800">
                          사과류
                        </p>
                        <p class="text-xs text-gray-500 mt-0.5">사과, 배</p>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    @click.prevent="goCategory('OTHER')"
                    class="block hover:bg-green-50 rounded-xl px-4 py-3 transition"
                  >
                    <div class="flex items-start gap-3">
                      <span class="text-lg">🍐</span>
                      <div>
                        <p class="text-sm font-semibold text-gray-800">기타</p>
                        <p class="text-xs text-gray-500 mt-0.5">
                          용과, 망고스틴, 스타푸르트
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <a
              href="#"
              @click.prevent="goNew"
              class="hover:text-[#407536] select-none"
              >신상품</a
            >
          </li>
          <li>
            <a
              href="#"
              @click.prevent="goBest"
              class="hover:text-[#407536] select-none"
              >베스트</a
            >
          </li>
          <li>
            <a
              href="#"
              @click.prevent="goMonthly"
              class="hover:text-[#407536] select-none"
              >이달의 과일</a
            >
          </li>
        </ul>
      </nav>

      <!-- 오른쪽: 장바구니 아이콘 + 사용자 프로필 -->
      <div class="flex items-center space-x-6 text-gray-700">
        <!-- 장바구니 아이콘 -->
        <button
          aria-label="장바구니"
          class="hover:text-[#407536]"
          @click="goCart"
        >
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
        <button
          aria-label="사용자 프로필"
          class="hover:text-[#407536]"
          @click="goMyPage"
        >
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
import { useRouter } from 'vue-router';
const router = useRouter();

function goCart() {
  router.push('/cart');
}

function goMyPage() {
  router.push('/mypage');
}

// 신상품, 베스트, 이달의 과일
function goNew() {
  router.push('/products/new');
}
function goBest() {
  router.push('/products/best');
}
function goMonthly() {
  router.push('/products/monthly');
}

// 과일 상세 카테고리
function goCategory(categoryCode) {
  router.push(`/products/category/${categoryCode}`);
}
</script>
