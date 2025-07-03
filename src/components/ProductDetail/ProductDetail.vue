<script setup>
import { ref, onMounted, watch } from 'vue';
import { getProductDetail } from '@/api/product';

import ProductDetailDescription from './ProductDetailDescription.vue';
import ProductSummary from './ProductSummary.vue';
import ProductTabs from './ProductTabs.vue';
// 리뷰 작업하고 주석 해제
import ProductReviewPage from './ProductReviewPage.vue';

// 부모인 ProductDetailPage.vue에서 받은 productId props
const props = defineProps(['productId']);

// 현재 선택된 탭 상태
const selectedTab = ref('description');

// 상품 정보를 저장할 반응형 상태
const product = ref(null);

// 탭 전환 시 selectedTab 값 바꿔주기
const changeTab = tab => {
  selectedTab.value = tab;
};

// 공통 함수로 분리
const fetchProduct = async id => {
  try {
    const res = await getProductDetail(id);
    product.value = res.data;
  } catch (err) {
    console.error('상품 불러오기 실패:', err);
  }
};

onMounted(() => {
  fetchProduct(props.productId);
});

// productId가 바뀔 때마다 다시 불러오도록 watch
watch(
  () => props.productId,
  newId => {
    fetchProduct(newId);
  },
);
</script>

<template>
  <div v-if="product" class="productDetail space-y-6">
    <!-- 상품 요약 정보 컴포넌트 : 이미지, 상품명, 가격, 버튼 등 -->
    <ProductSummary :product="product" />

    <!-- Tab UI (기본 - 상세설명 탭) -->
    <ProductTabs :selected-tab="selectedTab" @tabChange="changeTab" />

    <!-- 상세설명 탭 내용, 탭에 해당하는 컴포넌트 조건부 렌더링 -->
    <ProductDetailDescription
      v-if="selectedTab === 'description'"
      :product-id="props.productId"
      :product-name="product.name"
    />

    <ProductReviewPage
      v-if="selectedTab === 'review'"
      :product-id="productId"
    />
  </div>
</template>

<style scoped>
/* .productDetail {
} */
</style>
