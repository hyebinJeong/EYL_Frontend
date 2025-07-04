<template>
  <div class="max-w-7xl mx-auto p-8">
    <!-- 제목 -->
    <h1 class="text-3xl font-bold text-center mb-8 select-none">주문하기</h1>

    <!-- 주문 상품 목록 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">주문 상품</h2>
      <div class="rounded-lg border border-gray-300 overflow-hidden">
        <table class="w-full table-fixed">
          <thead class="bg-gray-100">
            <tr>
              <th class="p-4 text-left">상품</th>
              <th class="p-4 text-center">수량</th>
              <th class="p-4 text-right">금액</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in orderItems" :key="item.id" class="border-t">
              <td class="flex items-center p-4 gap-4">
                <img
                  :src="item.image"
                  alt="상품"
                  class="w-16 h-16 object-cover rounded-md border"
                />
                <div>
                  <p class="font-semibold text-gray-800">{{ item.name }}</p>
                  <p class="text-sm text-gray-500">
                    {{ item.price.toLocaleString() }}원
                  </p>
                </div>
              </td>
              <td class="text-center text-lg font-semibold">
                {{ item.quantity }}
              </td>
              <td class="text-right text-lg font-semibold pr-4">
                {{ (item.price * item.quantity).toLocaleString() }}원
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- 총 상품 금액 -->
      <div class="flex justify-end items-center mt-6">
        <p class="text-lg font-bold">
          총 상품 금액:
          <span class="text-green-700"
            >{{ totalPrice.toLocaleString() }}원</span
          >
        </p>
      </div>
    </section>

    <!-- 주문자 정보 -->
    <section class="mb-12">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">주문자 정보</h2>
      <div class="space-y-5">
        <div class="flex items-center">
          <label class="w-40 text-gray-700 font-medium">주문자 이름</label>
          <input
            type="text"
            :value="user.name"
            readonly
            class="flex-1 bg-gray-100 p-3 rounded border"
          />
        </div>
        <div class="flex items-center">
          <label class="w-40 text-gray-700 font-medium">연락처</label>
          <input
            type="tel"
            placeholder="010-1234-5678"
            @input="onPhoneInput"
            v-model="phone"
            class="flex-1 p-3 rounded border"
          />
        </div>
      </div>
    </section>

    <!-- 배송 정보 -->
    <section class="mb-20">
      <h2 class="text-2xl font-semibold text-gray-800 mb-6">배송 정보</h2>

      <div
        v-if="!isEditingDelivery"
        class="space-y-4 p-6 border rounded-lg bg-gray-50"
      >
        <p><strong>수령인:</strong> {{ delivery.name }}</p>
        <p><strong>휴대폰 번호:</strong> {{ delivery.phone }}</p>
        <p><strong>배송지 주소:</strong> {{ delivery.address }}</p>
        <button
          @click="editDelivery"
          class="mt-4 px-5 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
        >
          배송 정보 수정
        </button>
      </div>

      <!-- 배송 정보 수정 -->
      <div v-else class="space-y-5 p-6 border rounded-lg">
        <div class="flex items-center">
          <label class="w-40 text-gray-700 font-medium">수령인</label>
          <input
            type="text"
            v-model="deliveryForm.name"
            placeholder="수령인 이름 입력"
            class="flex-1 p-3 rounded border"
          />
        </div>
        <div class="flex items-center">
          <label class="w-40 text-gray-700 font-medium">휴대폰 번호</label>
          <input
            type="tel"
            v-model="deliveryForm.phone"
            placeholder="010-1234-5678"
            class="flex-1 p-3 rounded border"
            @input="onDeliveryPhoneInput"
          />
        </div>
        <div class="flex items-center">
          <label class="w-40 text-gray-700 font-medium">배송지 주소</label>
          <input
            type="text"
            v-model="deliveryForm.address"
            placeholder="배송지 주소 입력"
            class="flex-1 p-3 rounded border"
          />
        </div>
        <!-- 배송 정보 수정 저장 버튼 -->
        <div class="flex justify-end gap-3 mt-4">
          <button
            @click="saveDelivery"
            class="px-6 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
          >
            저장
          </button>
          <!-- 배송 정보 수정 취소 버튼 -->
          <button
            @click="cancelDeliveryEdit"
            class="px-6 py-2 rounded bg-gray-300 text-gray-700 hover:bg-gray-400 transition"
          >
            취소
          </button>
        </div>
      </div>
    </section>

    <!-- 최종 결제 금액 + 결제 버튼 -->
    <div class="fixed bottom-0 left-0 w-full bg-white border-t p-4 shadow">
      <div class="max-w-4xl mx-auto flex justify-between items-center">
        <div class="font-bold text-lg">
          최종 결제 금액:
          <span class="text-green-700"
            >{{ totalPrice.toLocaleString() }}원</span
          >
        </div>
        <button
          class="bg-green-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-green-700 transition"
          @click="handlePayment"
        >
          결제하기
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed, onMounted } from 'vue';
import { useOrderStore } from '@/stores/orderStore';
import { getMyInfo, createOrder } from '@/api/order';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const orderStore = useOrderStore();
const orderItems = computed(() => orderStore.orderItems); // 주문 상품 목록 가져오기

const authStore = useAuthStore();
const router = useRouter();

const user = reactive({
  name: '',
  phone: '',
});

const phone = ref('');

const delivery = reactive({
  name: '',
  phone: '',
  address: '',
});

// 배송지 정보 상태
const isEditingDelivery = ref(false);

// 배송지 수정 폼 데이터
const deliveryForm = reactive({ ...delivery });

const totalPrice = computed(() =>
  orderItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0),
);

// 하이픈 자동 삽입 함수 (주문자 연락처)
function formatPhoneNumber(value) {
  value = value.replace(/[^0-9]/g, '');

  if (value.length < 4) {
    return value;
  } else if (value.length < 8) {
    return value.slice(0, 3) + '-' + value.slice(3);
  } else {
    return (
      value.slice(0, 3) + '-' + value.slice(3, 7) + '-' + value.slice(7, 11)
    );
  }
}

function onPhoneInput(e) {
  phone.value = formatPhoneNumber(e.target.value);
}

// 테스트용 더미 데이터
// const dummyUserInfo = {
//   name: '홍길동',
//   phone: '010-1234-5678',
//   address: '서울특별시 강남구 테헤란로 123',
// };

// 주문자 정보 API 호출해서 세팅
const loadUserInfo = async () => {
  try {
    const res = await getMyInfo();
    user.name = res.data.name;
    user.phone = res.data.phone;
    phone.value = user.phone;

    // 배송지 기본값도 주문자 정보로 초기화 가능
    delivery.name = user.name;
    delivery.phone = user.phone;
    delivery.address = res.data.address || '';
  } catch (error) {
    alert('사용자 정보를 불러오는데 실패했습니다.');
  }
};

onMounted(async () => {
  await authStore.fetchUser();

  if (!authStore.isLoggedIn) {
    const confirmed = confirm('로그인이 필요한 서비스입니다.\n로그인 페이지로 이동할까요?');
    if (confirmed) {
      await router.push('/login');
    }
    return;
  }

  await loadUserInfo();
});

// 결제 버튼
const handlePayment = async () => {
  try {
    if (orderItems.value.length === 0) {
      alert('주문할 상품이 없습니다.');
      return;
    }

    const orderData = {
      orderItems: orderItems.value.map(item => ({
        productId: item.id,
        quantity: item.quantity,
      })),
      totalPrice: totalPrice.value,
      ordererPhone: phone.value,
      deliveryName: delivery.name,
      deliveryPhone: delivery.phone,
      deliveryAddress: delivery.address,
    };

    const res = await createOrder(orderData);
    alert('주문이 성공적으로 완료되었습니다.');
    // 주문 완료 후 페이지 이동 등 추가 처리
    router.push('/');

  } catch (error) {
    if (error.response && error.response.status === 401) {
      alert('로그인이 필요합니다. 로그인 페이지로 이동합니다.');
      router.push('/login');
    } else {
      alert('주문 처리 중 오류가 발생했습니다.');
    }
    console.error(error);
  }
};

// 배송지 휴대폰 하이픈 자동포맷
function onDeliveryPhoneInput(e) {
  let val = e.target.value.replace(/[^0-9]/g, '');
  if (val.length < 4) {
    deliveryForm.phone = val;
  } else if (val.length < 8) {
    deliveryForm.phone = val.slice(0, 3) + '-' + val.slice(3);
  } else {
    deliveryForm.phone =
      val.slice(0, 3) + '-' + val.slice(3, 7) + '-' + val.slice(7, 11);
  }
}

// 배송 정보 - 변경하기 버튼
function editDelivery() {
  deliveryForm.name = delivery.name;
  deliveryForm.phone = delivery.phone;
  deliveryForm.address = delivery.address;
  isEditingDelivery.value = true;
}

// 배송 변경 버튼 - 저장
function saveDelivery() {
  delivery.name = deliveryForm.name.trim();
  delivery.phone = deliveryForm.phone.trim();
  delivery.address = deliveryForm.address.trim();
  isEditingDelivery.value = false;
}

// 배송 변경 버튼 - 취소
function cancelDeliveryEdit() {
  deliveryForm.name = delivery.name;
  deliveryForm.phone = delivery.phone;
  deliveryForm.address = delivery.address;
  isEditingDelivery.value = false;
}
</script>
