<script setup>
// wrapper 컴포넌트
// 단순히 prop을 받아서 ReviewList에 전달
import ProductReviewList from './ProductReviewList.vue';

// defineProps로 받은 productId는 setup 내부에서 바로 변수처럼 사용 가능
const props = defineProps({
  productId: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <div class="ProductReviewPage px-4 py-6">
    <h2 class="text-2xl font-bold mb-4">상품평</h2>
    <!-- 실제 로직은 ReviewList가 담당 -->
    <ProductReviewList :product-id="productId" />
  </div>
</template>
