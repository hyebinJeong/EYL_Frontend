<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const currentSort = route.query.sort || 'default';

const updateSort = sort => {
  router.push({
    name: route.name,
    query: { ...route.query, sort },
  });
};
</script>

<template>
  <div class="flex gap-2">
    <button
      @click="updateSort('price_asc')"
      :class="[
        'px-4 py-2 border rounded transition',
        route.query.sort === 'price_asc'
          ? 'bg-green-600 text-white border-green-600'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100',
      ]"
    >
      가격 낮은순
    </button>

    <button
      @click="updateSort('price_desc')"
      :class="[
        'px-4 py-2 border rounded transition',
        route.query.sort === 'price_desc'
          ? 'bg-green-600 text-white border-green-600'
          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100',
      ]"
    >
      가격 높은순
    </button>
  </div>
</template>
