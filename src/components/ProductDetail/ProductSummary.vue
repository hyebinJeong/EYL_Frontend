<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 부모에서 전달된 상품 ID props
const props = defineProps(['productId']);

// 상품 정보 상태
const product = ref(null);

// 수량 선택 상태
const quantity = ref(1);

// 상품 정보 API 호출
onMounted(async () => {
  try {
    // const response = await axios.get(`/api/products/${props.productId}`);
    // 아직 데이터가 없어서 임시 데이터로 테스트해보기
    product.value = {
      name: 'Orange',
      price: 10000,
      imageUrl: '/images/orange.jpg',
    };
    product.value = response.data;
  } catch (error) {
    console.error('상품 정보 불러오는 것을 실패했습니다.', error);
  }
});
</script>

<template>
  <!-- 상품 정보가 있을 때만 보여줌 -->
  <div v-if="product" class="product-summary grid grid-cols-2 gap-6">
    <!-- 왼쪽 : 이미지 -->
    <div>
      <img
        :src="product.imageUrl"
        :alt="product.name"
        class="rounded-xl w-full object-cover"
      />
    </div>

    <!-- 오른쪽 : 상품 정보 -->
    <div class="space-y-4">
      <h2 class="text-2xl font-bold">{{ product.name }}</h2>
      <p class="text-lg font-semibold">
        {{ product.price.toLocaleString() }}원
      </p>

      <div>
        <label class="mr-2">수량:</label>
        <input
          type="number"
          min="1"
          max="99"
          class="border rounded w-16 text-center"
          v-model.number="quantity"
        />
      </div>

      <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        장바구니에 담기
      </button>
    </div>
  </div>

  <!-- 데이터 없을 때 로딩 메시지 -->
  <div v-else class="text-gray-500">상품 정보를 불러오는 중입니다.</div>
</template>

<style scoped>
/* .product-summary {
} */
</style>
