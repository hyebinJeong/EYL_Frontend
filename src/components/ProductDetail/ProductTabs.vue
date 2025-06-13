<script setup>
import { defineProps, defineEmits } from 'vue';

// 부모로부터 현재 선택된 탭을 props로 받아옴
// description 또는 review
const props = defineProps({
  selectedTab: {
    type: String,
    required: true,
  },
});

// 자식에서 부모로 탭 변경 이벤트 발생시킴
const emit = defineEmits(['tabChange']);

// 탭 클릭 시, 선택된 탭 이름을 부모에게 전달
const changeTab = tabName => {
  emit('tabChange', tabName);
};
</script>

<template>
  <!-- 탭 전체 컨테이너 -->
  <div class="ProductTabs flex border-b">
    <!-- 상세 설명 탭 버튼 -->
    <button
      :class="[
        'flex-1 px-4 py-3 text-center transition',
        selectedTab === 'description'
          ? 'border-b-2 border-black font-bold text-black'
          : 'text-500',
      ]"
      @click="changeTab('description')"
    >
      상품 상세
    </button>
    <!-- 상품평 탭 버튼 -->
    <button
      :class="[
        'flex-1 px-4 py-3 text-center transition',
        selectedTab === 'review'
          ? 'border-b-2 border-black font-bold text-black'
          : 'text-500',
      ]"
      @click="changeTab('review')"
    >
      상품평
    </button>
  </div>
</template>

<style scoped>
/* .ProductTabs {
} */
</style>
