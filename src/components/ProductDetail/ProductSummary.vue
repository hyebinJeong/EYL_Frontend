<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAddToCart } from '@/composables/useAddToCart';
import { createOrder } from '@/api/order';
import { useAuthStore } from '@/stores/authStore';

// 부모에서 전달된 상품 ID props
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// 장바구니 추가
const { addProductToCart } = useAddToCart();

// 수량 선택 상태
const quantity = ref(1);

const router = useRouter();

const { isLoggedIn, user } = useAuthStore();

// 장바구니 담기
const handleAddToCart = () => {
  console.log('로그인 상태?', isLoggedIn);
  console.log('user?', user);

  if (!isLoggedIn) {
    alert('로그인이 필요합니다.');
    router.push(`/login?next=cart`);
    return;
  }
  addProductToCart({
    user_id: user?.id,
    product_id: props.product.id,
    quantity: quantity.value,
  });
};

// 바로 구매
const handleOrderNow = async () => {
  if (!isLoggedIn) {
    alert('로그인이 필요합니다.');
    router.push(`/login?next=orders/new`);
    return;
  }
  try {
    await createOrder({
      user_id: user?.id,
      order_items: [{ product_id: props.product.id, quantity: quantity.value }],
    });
    router.push('/orders/new');
  } catch (error) {
    console.error('바로구매 실패:', error);
    alert('바로구매에 실패했습니다.');
  }
};
</script>

<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto py-16 px-6 items-start"
  >
    <!-- 상품 정보가 있을 때만 보여줌 -->
    <template v-if="product">
      <!-- 왼쪽: 이미지 -->
      <div class="w-full max-w-[400px] aspect-square mx-auto md:mx-0">
        <img
          :src="product.productImage"
          :alt="product.name"
          class="w-full h-full object-cover rounded-xl shadow"
        />
      </div>

      <!-- 오른쪽: 상품 정보 -->
      <div class="flex flex-col justify-between gap-8 min-h-[400px]">
        <!-- 위쪽: 상품 이름, 가격, 수량 -->
        <div class="space-y-10 mt-4">
          <h2 class="text-3xl font-bold">{{ product.name }}, 1kg</h2>
          <p class="text-xl font-semibold">
            {{ product.price.toLocaleString() }}원
          </p>
          <hr class="border-t border-gray-300" />
          <div class="flex items-center gap-2">
            <label class="font-semibold">수량:</label>
            <input
              type="number"
              min="1"
              max="99"
              v-model.number="quantity"
              class="border border-gray-300 rounded w-20 text-center"
            />
          </div>
          <hr class="border-t border-gray-300" />
        </div>

        <!-- 아래쪽: 총 수량, 버튼 -->
        <div class="space-y-4">
          <p class="text-500 font-semibold">
            총 수량 {{ quantity }}개 |
            {{ (quantity * product.price).toLocaleString() }}원
          </p>

          <!-- 재고가 0일 경우 품절 버튼만 표시 -->
          <div v-if="product.stock === 0">
            <button
              class="w-full bg-gray-400 text-white px-8 py-3 rounded font-semibold cursor-not-allowed"
              disabled
            >
              일시 품절입니다.
            </button>
          </div>

          <!-- 재고가 있을 경우 장바구니 / 구매 버튼 출력 -->
          <div v-else class="flex gap-10">
            <button
              class="w-1/2 bg-orange-400 text-white px-8 py-3 rounded font-semibold hover:bg-orange-500 transition"
              @click="handleAddToCart"
            >
              장바구니에 담기
            </button>
            <button
              class="w-1/2 bg-green-600 text-white px-8 py-3 rounded font-semibold hover:bg-green-700 transition"
              @click="handleOrderNow"
            >
              바로 구매
            </button>
          </div>
        </div>
      </div>
    </template>

    <!-- product가 아직 null일 경우 로딩 메시지 -->
    <template v-else>
      <div class="text-gray-500">상품 정보를 불러오는 중입니다.</div>
    </template>
  </div>
</template>

<style scoped>
/* .product-summary {
} */
</style>
