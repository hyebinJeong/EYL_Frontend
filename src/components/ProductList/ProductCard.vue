<script setup>
import { useRouter } from 'vue-router';
import { useAddToCart } from '@/composables/useAddToCart';
import { useAuthStore } from '@/stores/authStore';
import { ref } from 'vue';

const { addProductToCart } = useAddToCart();
const router = useRouter();
const quantity = ref(1);
// auth에서 로그인 정보, user id 받아오기
const { isLoggedIn, user } = useAuthStore();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// 장바구니 담기
const handleAddToCart = () => {
  console.log('로그인 상태?', isLoggedIn);
  console.log('user?', user);

  if (!isLoggedIn) {
    alert('로그인이 필요합니다.');
    router.push(`/login?next=cart`);
    return;
  }

  addProductToCart({
    user_id: user?.id,
    product_id: props.product.id,
    quantity: 1,
  });
};

// 상세 페이지 이동
const goToDetail = () => {
  router.push(`/products/detail/${props.product?.id}`);
};

const handleImgError = () => {
  imgError.value = true;
};
</script>

<template>
  <div class="border rounded-lg overflow-hidden shadow-sm bg-white">
    <!--  이미지 클릭 시 상세 페이지로 이동 -->
    <img
      :src="product.productImage"
      :alt="product.name"
      class="w-full h-52 object-cover cursor-pointer"
      @click="goToDetail"
      @error="handleImgError"
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
        <!-- {{ product.price.toLocaleString() }}원 -->
        {{ product.price ? product.price.toLocaleString() + '원' : '' }}
      </p>
    </div>
  </div>
</template>
