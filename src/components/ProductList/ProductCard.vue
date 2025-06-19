<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

defineEmits(['add-to-cart']);
</script>

<template>
  <div class="border rounded-lg overflow-hidden shadow-sm bg-white">
    <!-- 이미지 -->
    <img
      :src="product.imageUrl"
      :alt="product.name"
      class="w-full h-52 object-cover"
      @error="e => (e.target.src = '/images/orange.jpg')"
    />

    <!-- 담기 버튼 (이미지 아래) -->
    <div class="p-3 border-t">
      <button
        class="w-full text-sm py-2 border rounded text-gray-700 hover:bg-gray-100 transition"
        @click="$emit('add-to-cart', { id: product.id })"
      >
        🛒 담기
      </button>
    </div>

    <!-- 상품 정보 -->
    <div class="px-3 pb-4">
      <p class="text-sm font-semibold text-gray-900 mt-2">
        {{ product.name }}
      </p>
      <p class="text-xs text-gray-500 mt-1 mb-2">
        {{ product.description || '맛있고 신선한 과일입니다.' }}
      </p>
      <p class="text-base font-bold text-gray-800">
        {{ product.price.toLocaleString() }}원
      </p>
    </div>
  </div>
</template>
