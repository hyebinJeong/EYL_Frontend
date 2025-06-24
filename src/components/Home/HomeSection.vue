<script setup>
import ProductCarousel from './ProductCarousel.vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  title: String,
  products: Array,
  route: String,
});

const router = useRouter();

const goToMore = () => {
  if (props.route) router.push(props.route);
};
</script>

<template>
  <section>
    <div class="flex justify-between items-center mb-4 px-2">
      <h2
        class="text-xl font-bold cursor-pointer hover:text-blue-500 transition"
        @click="goToMore"
      >
        {{ title }}
      </h2>
    </div>

    <!-- 캐러셀 -->
    <ProductCarousel :products="products" />
  </section>
</template>
