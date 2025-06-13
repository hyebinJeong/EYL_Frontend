<template>
  <div class="max-w-7xl mx-auto p-8">
    <h1 class="text-3xl font-bold text-center mb-8 select-none">주문하기</h1>

    <table class="w-full border-2 border-green-700 border-collapse table-fixed">
      <thead>
        <tr class="border-b border-green-700">
          <th class="p-4 text-lg font-semibold text-center select-none">상품 정보</th>
          <th class="p-4 text-lg font-semibold text-center select-none">수량</th>
          <th class="p-4 text-lg font-semibold text-center select-none">상품 금액</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in orderItems" :key="item.id" class="border-2 border-green-700">
          <td class="p-4 flex justify-center items-center gap-4">
            <img :src="item.image" alt="상품 이미지" class="w-16 h-16 object-cover border rounded" />
            <div>
              <div class="text-lg font-semibold select-none">{{ item.name }}</div>
              <div class="text-black font-semibold select-none">{{ item.price.toLocaleString() }}원</div>
            </div>
          </td>
          <td class="p-4 text-center font-semibold text-lg">
            <div class="flex justify-center items-center">
              <div>{{ item.quantity }}</div>
            </div>
          </td>
          <td class="p-4 text-center font-semibold text-lg select-none">
            {{ (item.price * item.quantity).toLocaleString() }}원
          </td>
        </tr>
      </tbody>
    </table>
    <!-- <div class="flex  select-none" -->
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
const orderItems = ref([
  {
    id: 1,
    name: '상품명1',
    price: 2000,
    quantity: 1,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: 2,
    name: '상품명2',
    price: 20000,
    quantity: 3,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: 3,
    name: '상품명3',
    price: 450000,
    quantity: 15,
    image: 'https://via.placeholder.com/60',
  },
]);

const totalPrice = computed(() => {
  return orderItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
});
</script>
