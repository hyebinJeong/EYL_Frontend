<script setup>
import ProductCard from '@/components/ProductList/ProductCard.vue';
import { ref, computed } from 'vue';

const props = defineProps({
  products: Array,
});

const currentSlide = ref(0);
const itemsPerPage = 4;

const maxSlide = computed(() =>
  Math.max(0, Math.ceil(props.products.length / itemsPerPage) - 1),
);

const visibleProducts = computed(() =>
  props.products.slice(
    currentSlide.value * itemsPerPage,
    (currentSlide.value + 1) * itemsPerPage,
  ),
);

const prev = () => {
  if (currentSlide.value > 0) currentSlide.value--;
};

const next = () => {
  if (currentSlide.value < maxSlide.value) currentSlide.value++;
};
</script>

<template>
  <div class="relative group">
    <!-- 왼쪽 버튼 -->
    <button
      v-if="currentSlide > 0"
      @click="prev"
      class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100 sblock"
    >
      <svg
        class="w-5 h-5 text-gray-600"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M15 18l-6-6 6-6" />
      </svg>
    </button>

    <!-- 캐러셀 콘텐츠 -->
    <div class="grid grid-cols-4 gap-4">
      <ProductCard
        v-for="product in visibleProducts"
        :key="product.id"
        :product="product"
        class="w-full"
      />
      <!-- 빈칸 채우기 -->
      <div
        v-for="n in itemsPerPage - visibleProducts.length"
        :key="'empty-' + n"
        class="invisible"
      ></div>
    </div>

    <!-- 오른쪽 버튼 -->
    <button
      v-if="currentSlide < maxSlide"
      @click="next"
      class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border rounded-full shadow p-2 hover:bg-gray-100 block"
    >
      <svg
        class="w-5 h-5 text-gray-600"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  </div>
</template>
