<script setup>
import { ref, onMounted, watch } from 'vue';
import { getProductDescription } from '@/api/product';

// 부모 컴포넌트에서 전달된 productId
const props = defineProps(['productId', 'productName']);

const imageUrl = ref(''); // 이미지 URL 저장할 상태

const fetchImage = async id => {
  try {
    const res = await getProductDescription(id);
    imageUrl.value = res.data;
  } catch (error) {
    console.error('상세 설명 이미지 로드 실패:', error);
  }
};

// 상품 정보 상태값
const product = ref(null);

// 마운트 시 해당 상품 ID에 맞는 이미지 URL 불러오기
onMounted(() => {
  fetchImage(props.productId);
});

watch(
  () => props.productId,
  newId => {
    fetchImage(newId);
  },
);
</script>

<template>
  <div class="mt-4">
    <!-- 이미지가 있으면 표시 -->
    <img
      v-if="imageUrl"
      :src="imageUrl"
      :alt="`${props.productName}의 상세 이미지입니다.`"
      class="w-full object-cover"
    />

    <!-- 이미지가 없으면 텍스트 표시 -->
    <p v-else class="text-gray-400 text-sm text-center">
      상세 이미지가 없습니다.
    </p>
  </div>
</template>

<style scoped>
/* .ProductDetailDescription {
} */
</style>
