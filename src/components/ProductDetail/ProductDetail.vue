<script setup>
import ProductDetailDescription from './ProductDetailDescription.vue';
import ProductSummary from './ProductSummary.vue';
import ProductTabs from './ProductTabs.vue';

// 부모인 ProductDetailPage.vue에서 받은 productId props
const props = defineProps(['productId']);
</script>

<template>
  <div class="productDetail space-y-6">
    <!-- 상품 요약 정보 컴포넌트 : 이미지, 상품명, 가격, 버튼 등 -->
    <ProductSummary :product-id="productId" />

    <!-- Tab UI (기본 - 상세설명 탭) -->
    <ProductTabs />

    <!-- 상세설명 탭 내용 (기본 설정) -->
    <ProductDetailDescription />
  </div>
</template>

<style scoped>
/* .productDetail {
} */
</style>
