<script setup>
import { ref, onMounted, watch } from 'vue';
import axios from 'axios';

const props = defineProps({
  productId: {
    type: Number,
    required: true,
  },
});

// 리뷰 목록, 현재 페이지, 전체 페이지 수 상태 정의
const reviews = ref([]);
const page = ref(1);
const totalPages = ref(1);
// 한 페이지당 리뷰 수
const pageSize = 10;

// 실제 API 통신용 함수
// const fetchReviews = async () => {
//   try {
//     const res = await axios.get(
//       `/api/products/${props.productId}/reviews?page=${page.value}&size=${pageSize}`
//     );
//     reviews.value = res.data.reviews;
//     totalPages.value = res.data.totalPages;
//   } catch (error) {
//     console.error('리뷰 불러오기 실패:', error);
//   }
// };

// 테스트용 임시 데이터
const fetchReviews = async () => {
  const dummy = [
    {
      id: 1,
      reviewer: '이승예',
      rating: 5,
      content: '상큼하고 신선해요. 다음에 또 주문할게요.',
      createdAt: '2025-06-01',
    },
    {
      id: 2,
      reviewer: '송용욱',
      rating: 4,
      content: '만족합니다.',
      createdAt: '2025-06-02',
    },
    {
      id: 3,
      reviewer: '정혜빈',
      rating: 5,
      content: '싱싱하고 당도가 높아요.',
      createdAt: '2025-06-03',
    },
    {
      id: 4,
      reviewer: '박보검',
      rating: 4,
      content: '배송이 조금 늦었어요.',
      createdAt: '2025-06-04',
    },
    {
      id: 5,
      reviewer: '차은우',
      rating: 5,
      content: '맛있어요.',
      createdAt: '2025-06-05',
    },
    {
      id: 6,
      reviewer: '장원영',
      rating: 4,
      content: '쓸만해요.',
      createdAt: '2025-06-06',
    },
    {
      id: 7,
      reviewer: '아이유',
      rating: 3,
      content: '보통이에요.',
      createdAt: '2025-06-07',
    },
    {
      id: 8,
      reviewer: '지예은',
      rating: 5,
      content: '추천합니다!',
      createdAt: '2025-06-08',
    },
    {
      id: 9,
      reviewer: '주현영',
      rating: 4,
      content: '맛이 괜찮네요.',
      createdAt: '2025-06-09',
    },
    {
      id: 10,
      reviewer: '한지민',
      rating: 5,
      content: '역시 오렌지 최고!',
      createdAt: '2025-06-10',
    },
    {
      id: 11,
      reviewer: '이동욱',
      rating: 4,
      content: '다음에 또 주문할게요.',
      createdAt: '2025-06-11',
    },
  ];
  const start = (page.value - 1) * pageSize;
  const end = start + pageSize;
  reviews.value = dummy.slice(start, end);
  totalPages.value = Math.ceil(dummy.length / pageSize);
};

// 컴포넌트 mount시 첫 데이터 로딩
onMounted(fetchReviews);

// page 변경될 때마다 새로 데이터 가져오기
watch(page, fetchReviews);
</script>

<template>
  <div class="ProductReviewList">
    <!-- 리뷰 리스트 -->
    <ul v-if="reviews.length > 0" class="space-y-4">
      <li
        v-for="review in reviews"
        :key="review.id"
        class="p-4 border rounded shadow"
      >
        <p class="font-semibold">{{ review.reviewer }}</p>

        <!-- ⭐ 별점 표시 추가 -->
        <p class="text-yellow-500 text-sm">
          {{ '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating) }}
        </p>

        <p class="text-gray-600">{{ review.content }}</p>
        <p class="text-sm text-gray-400">{{ review.createdAt }}</p>
      </li>
    </ul>

    <!-- 리뷰 없을 경우 -->
    <p v-else class="text-gray-500">등록된 리뷰가 없습니다.</p>

    <!-- 페이지네이션 버튼 -->
    <div v-if="totalPages > 1" class="mt-6 flex justify-center gap-2">
      <button
        v-for="i in totalPages"
        :key="i"
        @click="page = i"
        :class="[
          'px-3 py-1 border rounded',
          page === i
            ? 'bg-black text-white'
            : 'bg-white text-black border-gray-300',
        ]"
      >
        {{ i }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* .ProductReviewList {
} */
</style>
