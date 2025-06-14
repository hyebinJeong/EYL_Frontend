<script setup>
import { ref } from 'vue';

import ProductDetailDescription from './ProductDetailDescription.vue';
import ProductSummary from './ProductSummary.vue';
import ProductTabs from './ProductTabs.vue';
// 리뷰 작업하고 주석 해제제
// import ProductReviewPage from './ProductReviewPage.vue';

// 부모인 ProductDetailPage.vue에서 받은 productId props
const props = defineProps(['productId']);

// 현재 선택된 탭 상태
const selectedTab = ref('description');

// 탭 전환 시 selectedTab 값 바꿔주기
const changeTab = tab => {
  selectedTab.value = tab;
};
</script>

<template>
  <div class="productDetail space-y-6">
    <!-- 상품 요약 정보 컴포넌트 : 이미지, 상품명, 가격, 버튼 등 -->
    <ProductSummary :product-id="productId" />

    <!-- Tab UI (기본 - 상세설명 탭) -->
    <ProductTabs :selected-tab="selectedTab" @tabChange="changeTab" />

    <!-- 상세설명 탭 내용, 탭에 해당하는 컴포넌트 조건부 렌더링 -->
    <ProductDetailDescription v-if="selectedTab === 'description'" />
    <!-- <ProductReviewPage v-if="selectedTab === 'review'" :product-id="productId" /> -->
  </div>
</template>

<style scoped>
/* .productDetail {
} */
</style>
