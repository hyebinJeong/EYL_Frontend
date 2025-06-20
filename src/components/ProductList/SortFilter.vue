<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute(); // 현재 url정보 가져옴 (/products?sort=price_asc)
const router = useRouter(); // url 변경
const currentSort = route.query.sort || 'default';

// url 새로 설정해서 화면 상태 변경
const updateSort = sort => {
  router.push({
    name: route.name, // 라우트 이름 그대로 유지
    query: { ...route.query, sort }, // 기존 쿼리에 sort만 바꾸기
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
