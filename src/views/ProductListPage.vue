<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import {
  getBestProducts,
  getNewProducts,
  getMonthlyProducts,
  getProductsByCategory,
} from '@/api/product';

import ProductCard from '@/components/ProductList/ProductCard.vue';
import SortFilter from '@/components/ProductList/SortFilter.vue';

// defineProps로 category, sort 받기
const props = defineProps({
  category: String,
  sort: String,
});

const products = ref([]);
const route = useRoute();
const router = useRouter();

// 정렬 필터 표시 여부 - 카테고리 페이지만 true로 설정
const showSort = route.name === 'CategoryProductList';

const fetchProducts = async () => {
  if (route.name === 'BestProducts') {
    products.value = (await getBestProducts()).data;
  } else if (route.name === 'NewProducts') {
    products.value = (await getNewProducts()).data;
  } else if (route.name === 'MonthlyProducts') {
    console.log('MonthlyProducts 조건 실행됨');
    const res = await getMonthlyProducts();
    console.log('이달의 과일 데이터:', res.data);
    products.value = res.data;
  } else if (props.category) {
    // props로부터 category, sort 전달
    products.value = (
      await getProductsByCategory(props.category, props.sort)
    ).data;
  }
};

onMounted(fetchProducts);
watch(() => route.fullPath, fetchProducts); // URL이 바뀔 때마다 다시 요청

const handleAddToCart = () => {
  const isLoggedIn =
    document.cookie.includes('SESSION') ||
    document.cookie.includes('JSESSIONID');

  if (isLoggedIn) {
    router.push('/cart');
  } else {
    router.push('/login');
  }
};
</script>

<template>
  <div class="max-w-screen-xl mx-auto px-4 py-8">
    <!-- 정렬 버튼을 오른쪽 정렬 -->
    <div v-if="showSort" class="flex justify-end mb-4">
      <SortFilter />
    </div>

    <div v-if="products.length === 0" class="text-center text-gray-500 py-10">
      해당 카테고리에 등록된 상품이 없습니다.
    </div>

    <!-- 상품 카드 그리드 -->
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
      <ProductCard
        v-for="item in products"
        :key="item.id"
        :product="item"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>
