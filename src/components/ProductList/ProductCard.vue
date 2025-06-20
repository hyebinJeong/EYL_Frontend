<script setup>
import { useRouter } from 'vue-router';
const router = useRouter();

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

defineEmits(['add-to-cart']);

// 상세 페이지로 이동하는 함수 (상품 클릭 시 호출)
const goToDetail = () => {
  router.push(`/products/detail/${props.product.id}`);
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
    />

    <!-- 장바구니 담기 버튼 -->
    <div class="p-3 border-t">
      <button
        class="w-full text-sm py-2 border rounded text-gray-700 hover:bg-gray-100 transition"
        @click="$emit('add-to-cart', { productId: product.id, quantity: 1 })"
      >
        🛒 담기
      </button>
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
