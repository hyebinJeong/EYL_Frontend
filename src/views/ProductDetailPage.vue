<script setup>
import { useRoute } from 'vue-router';

// 현재 URL 정보를 가져옴
const route = useRoute();

// URL에서 :id 값을 추출해서 변수에 저장
const productId = route.params.id;

// 실제 UI를 구성하는 컴포넌트를 import
import ProductDetail from '@/components/ProductDetail/ProductDetail.vue';

console.log('전달된 productId:', productId);
</script>

<template>
  <div class="ProductDetailPage py-10 px-6 max-w-5xl mx-auto">
    <!-- 자식 컴포넌트(ProductDetail.vue)에 productId를 props로 전달 -->
    <ProductDetail :product-id="productId" />
  </div>
</template>

<style scoped>
/* .ProductDetailPage {
} */
</style>
