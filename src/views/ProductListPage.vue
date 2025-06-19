<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import {
  getProductsByCategory,
  getProductsByTag,
  getBestProducts,
} from '@/api/product';
import ProductCard from '@/components/ProductList/ProductCard.vue';
import SortFilter from '@/components/ProductList/SortFilter.vue';

const products = ref([]);
const route = useRoute();

const fetchProducts = async () => {
  const { category, sort } = route.query;
  const { tagName } = route.params;

  if (tagName === 'best') {
    products.value = (await getBestProducts()).data;
  } else if (tagName) {
    products.value = (await getProductsByTag(tagName)).data;
  } else if (category) {
    products.value = (await getProductsByCategory(category, sort)).data;
  }
};

onMounted(fetchProducts);
watch(() => route.fullPath, fetchProducts); // 라우터 이동 감지하여 다시 불러옴
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-4 py-8">
    <!-- 정렬 버튼을 오른쪽 정렬 -->
    <div class="flex justify-end mb-4">
      <SortFilter />
    </div>

    <!-- 상품 카드 그리드 -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      <ProductCard
        v-for="item in products"
        :key="item.id"
        :product="item"
        @add-to-cart="payload => console.log('장바구니 담기:', payload)"
      />
    </div>
  </div>
</template>
