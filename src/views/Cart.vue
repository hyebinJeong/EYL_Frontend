<template>
  <div class="max-w-7xl mx-auto p-8">
    <!-- 제목 -->
    <h1 class="text-3xl font-bold text-center mb-8 select-none">장바구니</h1>

    <!-- 테이블 바로 밑 왼쪽에 선택 상품 삭제 버튼 -->
    <div class="flex justify-start mt-4 mb-4">
      <button
        @click="deleteSelectedItems"
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
              <div
                class="w-16 h-10 text-center border-t border-b border-gray-300 text-lg flex items-center justify-center select-none"
              >
                {{ item.quantity }}
              </div>
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

    <!-- 총 결제 금액 + 쇼핑 계속하기 버튼을 한 줄에 배치 -->
    <div
      class="p-4 mt-5 mb-4 select-none flex justify-between items-center font-bold text-xl border-green-700"
    >
      <!-- 왼쪽 버튼 -->
      <button
        class="px-4 py-2 border border-gray-400 text-gray-700 rounded select-none"
      >
        쇼핑 계속하기
      </button>

      <!-- 오른쪽 총 결제 금액 -->
      <div class="flex items-center">
        <span class="mr-4 min-w-[110px] text-right">총 결제 금액</span>
        <span class="min-w-[120px] text-right">
          {{ totalPrice.toLocaleString() }}원
        </span>
      </div>
    </div>
    <div class="flex justify-center gap-6 mt-6">
      <button
        @click="orderSelected"
        class="px-10 py-4 bg-green-600 text-white rounded select-none text-lg font-semibold shadow-lg hover:shadow-xl transition"
      >
        선택 상품 주문
      </button>
      <button
        @click="orderAll"
        class="px-10 py-4 bg-green-600 text-white rounded select-none text-lg font-semibold shadow-lg hover:shadow-xl transition"
      >
        전체 상품 주문
      </button>
    </div>
  </div>
</template>

<script setup>
import {
  getCartItems,
  deleteCartItems,
  updateCartItemQuantity,
} from '@/api/cart';
import { checkStock, createOrder } from '@/api/order';
import { ref, onMounted, computed, watch } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const allSelected = ref(true);
const cartItems = ref([]);

// 1. 장바구니 데이터 가져오기
const loadCart = async () => {
  try {
    const res = await getCartItems();
    cartItems.value = res.data.map(item => ({
      id: item.productId,
      name: item.name,
      price: item.price,
      stock: item.stock,
      quantity: item.quantity,
      selected: true,
      image: item.productImage,
    }));
  } catch (error) {
    alert('장바구니 불러오기 실패');
    console.error(error);
  }
};

// 2. 전체 선택 토글
const toggleAll = () => {
  cartItems.value.forEach(item => {
    item.selected = allSelected.value;
  });
};

// 3. 개별 아이템 선택
watch(
  cartItems,
  () => {
    allSelected.value =
      cartItems.value.length > 0 &&
      cartItems.value.every(item => item.selected);
  },
  { deep: true },
);

// 4. 총 결제 금액 계산
const totalPrice = computed(() =>
  cartItems.value
    .filter(item => item.selected)
    .reduce((sum, item) => sum + item.price * item.quantity, 0),
);

// 5. 수량 증가
const increase = async index => {
  const item = cartItems.value[index];
  if (item.quantity >= item.stock) {
    alert(`재고가 부족합니다. 최대 ${item.stock}개까지 주문할 수 있습니다.`);
    return; // 재고 이상으로 증가 불가
  }
  const newQuantity = item.quantity + 1;
  try {
    await updateCartItemQuantity({
      productId: item.id,
      quantity: newQuantity,
    });
    item.quantity = newQuantity;
  } catch {
    alert('수량 변경 실패');
  }
};

// 6. 수량 감소
const decrease = async index => {
  const item = cartItems.value[index];
  if (item.quantity > 1) {
    const newQuantity = item.quantity - 1;
    try {
      await updateCartItemQuantity({
        productId: item.id,
        quantity: newQuantity,
      });
      item.quantity = newQuantity;
    } catch {
      alert('수량 변경 실패');
    }
  }
};

// 7. 선택 삭제
const deleteSelectedItems = async () => {
  const selectedIds = cartItems.value
    .filter(item => item.selected)
    .map(item => item.id);
  if (selectedIds.length === 0) {
    alert('삭제할 상품을 선택해주세요');
    return;
  }
  try {
    await deleteCartItems({ productIds: selectedIds });
    cartItems.value = cartItems.value.filter(item => !item.selected);
  } catch {
    alert('삭제 실패');
  }
};

// 8️. 선택 상품 주문
const orderSelected = async () => {
  const orderItems = cartItems.value
    .filter(item => item.selected)
    .map(item => ({ productId: item.id, quantity: item.quantity }));

  if (orderItems.length === 0) {
    alert('주문할 상품을 선택해주세요');
    return;
  }

  try {
    const res = await checkStock({ order_items: orderItems });
    if (!res.data.available) {
      const items = res.data.insufficient_items || [];

      if (items.length > 0) {
        const msg = items
          .map(
            item =>
              `${item.product_name} 상품의 재고가 부족합니다. 남은 재고: ${item.stock}개`,
          )
          .join('\n');

        alert(msg);
      } else {
        alert(res.data.message || '재고가 부족한 상품이 있습니다.');
      }

      return;
    }

    router.push({
      name: 'OrderPage', // 라우터에 설정한 이름
      state: { orderItems }, // 주문할 상품 목록 전달
    });
  } catch {
    alert('주문 실패');
  }
};

// 9️. 전체 상품 주문
const orderAll = async () => {
  const orderItems = cartItems.value.map(item => ({
    productId: item.id,
    quantity: item.quantity,
  }));

  if (orderItems.length === 0) {
    alert('주문할 상품이 없습니다');
    return;
  }

  try {
    const res = await checkStock({ order_items: orderItems });
    if (!res.data.available) {
      const items = res.data.insufficient_items || [];

      if (items.length > 0) {
        const msg = items
          .map(
            item =>
              `${item.product_name} 상품의 재고가 부족합니다. 남은 재고: ${item.stock}개`,
          )
          .join('\n');

        alert(msg);
      } else {
        alert(res.data.message || '재고가 부족한 상품이 있습니다.');
      }

      return;
    }

    router.push({
      name: 'OrderPage', // 라우터에 설정한 이름
      state: { orderItems }, // 주문할 상품 목록 전달
    });
  } catch {
    alert('주문 실패');
  }
};

// 장바구니 목록 조회 API 연결
onMounted(async () => {
  loadCart();
});
</script>
