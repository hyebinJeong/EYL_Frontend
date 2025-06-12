<template>
  <div class="max-w-7xl mx-auto p-8">
    <!-- 제목 -->
    <h1 class="text-3xl font-bold text-center mb-8 select-none">장바구니</h1>

    <!-- 테이블 바로 밑 왼쪽에 선택 상품 삭제 버튼 -->
    <div class="flex justify-start mt-4 mb-4">
      <button
        class="px-1 py-0.5 border border-gray-400 text-gray-700 rounded select-none"
      >
        선택 삭제
      </button>
    </div>

    <!-- 장바구니 테이블 -->
    <table class="w-full border-2 border-green-700 border-collapse table-fixed">
      <thead>
        <tr class="border-b border-green-700">
          <th class="w-16 p-4 text-center select-none">
            <input type="checkbox" v-model="allSelected" @change="toggleAll" />
          </th>
          <th class="p-4 text-lg font-semibold text-center select-none">
            상품 정보
          </th>
          <th class="p-4 text-lg font-semibold text-center select-none">
            수량
          </th>
          <th class="p-4 text-lg font-semibold text-center select-none">
            상품 금액
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, index) in cartItems"
          :key="item.id"
          class="border-2 border-green-700"
        >
          <td class="p-4 text-center select-none">
            <input type="checkbox" v-model="item.selected" />
          </td>
          <td class="p-4 flex items-center gap-4">
            <img
              :src="item.image"
              alt="상품 이미지"
              class="w-16 h-16 object-cover border rounded"
            />
            <div>
              <div class="text-lg font-semibold select-none">
                {{ item.name }}
              </div>
              <div class="text-black font-semibold select-none">
                {{ item.price.toLocaleString() }}원
              </div>
            </div>
          </td>
          <td class="p-4 text-center font-semibold text-lg">
            <div class="flex justify-center items-center">
              <button
                @click="decrease(index)"
                class="px-3 h-10 border rounded-l select-none flex justify-center items-center text-lg"
              >
                -
              </button>
              <input
                type="number"
                v-model.number="item.quantity"
                class="w-16 h-10 text-center border-t border-b border-gray-300 text-lg focus:outline-none"
                min="1"
              />
              <button
                @click="increase(index)"
                class="px-3 h-10 border rounded-r select-none flex justify-center items-center text-lg"
              >
                +
              </button>
            </div>
          </td>
          <td class="p-4 text-center font-semibold text-lg select-none">
            {{ (item.price * item.quantity).toLocaleString() }}원
          </td>
        </tr>
      </tbody>
    </table>

    <!-- 테두리 박스 안에 총 결제 금액 -->
    <div
      class="border rounded p-4 mt-5 mb-4 select-none flex justify-end items-center font-bold text-xl border-green-700"
    >
      <span class="mr-4 min-w-[110px] text-right">총 결제 금액</span>
      <span class="min-w-[120px] text-right"
        >{{ totalPrice.toLocaleString() }}원</span
      >
    </div>

    <!-- 박스 바깥 하단, 양쪽 정렬 -->
    <div class="flex justify-between items-center">
      <button
        class="px-4 py-2 border border-gray-400 text-gray-700 rounded select-none"
      >
        쇼핑 계속하기
      </button>
    </div>
    <div class="flex justify-center gap-6 mt-6">
      <button
        class="px-10 py-4 bg-green-600 text-white rounded select-none text-lg font-semibold shadow-lg hover:shadow-xl transition"
      >
        선택 상품 주문
      </button>
      <button
        class="px-10 py-4 bg-green-600 text-white rounded select-none text-lg font-semibold shadow-lg hover:shadow-xl transition"
      >
        전체 상품 주문
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
const a = 1;

const cartItems = ref([
  {
    id: 1,
    name: '상품명1',
    price: 20000,
    quantity: 1,
    selected: true,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: 2,
    name: '상품명2',
    price: 10000,
    quantity: 1,
    selected: true,
    image: 'https://via.placeholder.com/60',
  },
  {
    id: 3,
    name: '상품명3',
    price: 10000,
    quantity: 1,
    selected: true,
    image: 'https://via.placeholder.com/60',
  },
]);

const totalPrice = computed(() => {
  return cartItems.value
    .filter(item => item.selected)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const allSelected = ref(true);

const toggleAll = () => {
  cartItems.value.forEach(item => {
    item.selected = allSelected.value;
  });
};

watch(
  cartItems,
  () => {
    allSelected.value = cartItems.value.every(item => item.selected);
  },
  { deep: true },
);

const increase = index => {
  cartItems.value[index].quantity += 1;
};

const decrease = index => {
  if (cartItems.value[index].quantity > 1) {
    cartItems.value[index].quantity -= 1;
  }
};
</script>
