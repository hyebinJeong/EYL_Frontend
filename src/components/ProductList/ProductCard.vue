<script setup>
import { useRouter } from 'vue-router';
import { useAddToCart } from '@/composables/useAddToCart';
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue';

// 장바구니 composable 함수 (장바구니 API + /cart 이동)
const { addProductToCart } = useAddToCart();

const router = useRouter();
const quantity = ref(1);

// Pinia store에서 로그인 여부와 유저 정보만 구조분해로 꺼냄
const { isLoggedIn, user } = useAuthStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// 상세 페이지로 이동하는 함수 (상품 클릭 시 호출)
const goToDetail = () => {
  router.push(`/products/detail/${props.product.id}`);
};

// 장바구니 버튼 클릭 시 로그인 여부 확인 + 처리
const handleAddToCart = () => {
  if (!isLoggedIn) {
    alert('로그인이 필요합니다.');
    router.push('/login');
    return; // 로그인 안되어있으면 함수 즉시 종료
  }
  // 로그인 되어있으면 장바구니 담기 실행
  addProductToCart({
    user_id: user?.id,
    product_id: props.product.id,
    quantity: quantity.value,
  });
};
</script>

<template>
  <div class="border rounded-lg overflow-hidden shadow-sm bg-white">
    <!--  이미지 클릭 시 상세 페이지로 이동 -->
    <img
      :src="product.imageUrl"
      :alt="product.name"
      class="w-full h-52 object-cover cursor-pointer"
      @click="goToDetail"
      @error="e => (e.target.src = '/images/orange.jpg')"
      :class="{ 'grayscale brightness-50': product.stock === 0 }"
    />

    <!-- 장바구니 담기 버튼 or 품절 안내 -->
    <div class="p-3 border-t">
      <template v-if="product.stock > 0">
        <button
          class="w-full text-sm py-2 border rounded text-gray-700 hover:bg-gray-100 transition"
          @click="handleAddToCart"
        >
          🛒 담기
        </button>
      </template>
      <template v-else>
        <!-- 재고가 0일 경우 품절 안내 표시 -->
        <div
          class="w-full text-sm py-2 border rounded text-center text-gray-400 bg-gray-100 cursor-not-allowed"
        >
          일시 품절입니다.
        </div>
      </template>
    </div>

    <!-- 상품 이름 등 텍스트 영역 클릭 시에도 상세 페이지로 이동 -->
    <div class="px-3 pb-4 cursor-pointer" @click="goToDetail">
      <p class="text-sm font-semibold text-gray-900 mt-2">
        {{ product.name }}
      </p>
      <p class="text-xs text-gray-500 mt-1 mb-2">
        {{ product.description || '맛있고 신선한 과일입니다.' }}
      </p>
      <p class="text-base font-bold text-gray-800">
        {{ product.price.toLocaleString() }}원
      </p>
    </div>
  </div>
</template>
