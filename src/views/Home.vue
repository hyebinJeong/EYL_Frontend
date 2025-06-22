<script setup>
import HomeSection from '@/components/Home/HomeSection.vue';
import { ref, onMounted } from 'vue';
import {
  getBestProducts,
  getNewProducts,
  getMonthlyProducts,
} from '@/api/product';

const bestProducts = ref([]);
const newProducts = ref([]);
const monthlyProducts = ref([]);

onMounted(async () => {
  bestProducts.value = (await getBestProducts()).data;
  newProducts.value = (await getNewProducts()).data;
  monthlyProducts.value = (await getMonthlyProducts()).data;
  // console.log('bestProducts', bestProducts.value);
});
</script>

<template>
  <div class="space-y-16 pt-8 px-4 max-w-screen-xl mx-auto">
    <HomeSection
      title="🔥 베스트 상품 "
      :products="bestProducts"
      route="/products/best"
    />
    <HomeSection
      title="✨ 신상품 "
      :products="newProducts"
      route="/products/new"
    />
    <HomeSection
      title="🍋‍🟩 이달의 과일 "
      :products="monthlyProducts"
      route="/products/monthly"
    />
  </div>
</template>
