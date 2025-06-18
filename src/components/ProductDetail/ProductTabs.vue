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

// 반복 렌더링을 위해 탭 목록 배열 추가
const tabs = [
  { name: 'description', label: '상품 상세' },
  { name: 'review', label: '상품평' },
];
</script>

<template>
  <!-- 탭 전체 컨테이너 -->
  <div class="ProductTabs flex border-b">
    <button
      v-for="tab in tabs"
      :key="tab.name"
      :class="[
        'flex-1 px-4 py-3 text-center transition',
        selectedTab === tab.name
          ? 'border-b-2 border-black text-black font-bold'
          : 'text-gray-400 font-normal hover:text-black',
      ]"
      @click="changeTab(tab.name)"
    >
      {{ tab.label }}
    </button>
  </div>
</template>

<style scoped>
/* .ProductTabs {
} */
</style>
