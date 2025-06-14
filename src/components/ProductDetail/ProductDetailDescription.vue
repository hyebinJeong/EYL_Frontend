<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 부모 컴포넌트에서 전달된 productId
const props = defineProps(['productId']);

// 상품 정보 상태값
const product = ref(null);

// 상품 상세 정보 API 호출 (S3 이미지 포함)
// onMounted(async () => {
//   try {
//     const response = await axios.get('/api/products/${props.productId}');
//     product.value = response.data;
//   } catch (error) {
//     console.error('상품 상세 정보를 불러오는데 실패했습니다.', error);
//   }
// });
</script>

<template>
  <div class="ProductDetailDescription">
    <div class="mt-12">
      <div class="py-8">
        <div class="mb-12">
          <!-- 대표 이미지 -->
          <img
            alt="Product feature highlight: Fresh Orange"
            class="w-full h-auto rounded-lg shadow-md"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHnfir7Eenvu3eWVVoRlbhW6uj0hJ4hvY8GVMgVMovrwHNuninP2ZbGRCfIpmUZZwX5d_6XGRxn0NBCuyBOpy0PaijHPPFEiqQ6GaoBMzVj4tKKrnkNvDaZlO5qn3R7-sTJHQnA86jcmutHxbxuSNTygEKNWQgFqtOwWx0JU1qLTgtjBgmUZg-8zZMGZx2V98StRXIvMyYjK3MfJfIeqMHxQIlUmITyVP5-Puf2afwKxBdfRrKoF3R67KarbsoH086qfzDby6i4WzR"
          />
        </div>
        <div class="text-center mb-12">
          <!-- 소개 text -->
          <h2 class="text-3xl font-bold text-gray-800 mb-4">
            <!-- 신선하고 맛있는 {{ product.name }} -->
            신선하고 맛있는 오렌지
          </h2>
          <p class="text-gray-600 text-lg">
            엄선된 농장에서 직접 가져온 최상급 오렌지입니다.<br />풍부한 과즙과
            달콤한 맛을 느껴보세요.
          </p>
        </div>
        <!-- 이미지와 상품 설명 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <img
              alt="Close up of oranges"
              class="w-full h-auto rounded-lg shadow-md"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEB6rNJEsUPPgSV0-RxbuXcF8cu4OL_yypxz5nsl_shoiuf5ldOhz6-ebcF3EISjzbtrqCDgKNahqx_tR7XM-cYu7niahDRd604v39LFJPE5JeqyeA1LUdOYyZ93xRg2mHzuSAtEY9O6uZzhH7M-3qx4-JV76pqS-9wcNU7g7C8TB0Ql0AWnFI2efGEflAQRquhwviWSeAiZNFnteC5nObL5JBOwk4RyXE90SzUI7s5pQjHDlggX75RsLcyj9r5jybGOW6XOzsZeQJ"
            />
          </div>
          <div class="text-left">
            <h3 class="text-2xl font-semibold text-gray-800 mb-3">
              풍부한 비타민 C
            </h3>
            <p class="text-gray-600 leading-relaxed">
              오렌지는 비타민 C가 풍부하여 면역력 강화에 도움을 줍니다. 매일
              신선한 오렌지로 건강을 챙기세요.
            </p>
          </div>
        </div>
        <!-- 활용법 이미지, 설명 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 items-center">
          <div class="text-left md:order-2">
            <h3 class="text-2xl font-semibold text-gray-800 mb-3">
              다양한 활용법
            </h3>
            <p class="text-gray-600 leading-relaxed">
              생과일로 즐기거나 주스, 샐러드, 디저트 등 다양하게 활용할 수
              있습니다. 온 가족이 함께 즐겨보세요.
            </p>
          </div>
          <div>
            <img
              alt="Oranges displayed in a bowl"
              class="w-full h-auto rounded-lg shadow-md md:order-1"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa0uNLQLTIS29e7pUw8e5ka2Bq6RfpsPyxxd6VunaDQKY5pb9wE3eprZ5aq3AkNGOwEfIKoFbsHZ1BSuSQxJuE-gUXWpPMyjAKW6Jf5B_gf8XD5HYZz_EBaCAf0LwWT5AfzqJ2DZh8lnnEkrubE95MI3xAFOf8LamaEH4874DjpQRN5TlVK6Horj0iWGin9mKZ1hD3p3LS1tWXybHyZEEXLL6ExmCNJHEV0tIUqb_tKc2qjQ92SZGiwOO6FDJXkydDvLvGeJkcubPN"
            />
          </div>
        </div>
        <!-- 상품 정보 테이블 -->
        <div class="bg-gray-50 p-8 rounded-lg shadow">
          <h3 class="text-2xl font-semibold text-gray-800 mb-4 text-center">
            상품 정보
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            <div>
              <span class="font-medium text-gray-700">제품명:</span> Orange, 1
              kg
            </div>
            <div>
              <span class="font-medium text-gray-700">원산지:</span> 대한민국
            </div>
            <div><span class="font-medium text-gray-700">중량:</span> 1kg</div>
            <div>
              <span class="font-medium text-gray-700">보관방법:</span> 냉장보관
            </div>
            <div class="md:col-span-2">
              <span class="font-medium text-gray-700">특징:</span> 당도가 높고
              과즙이 풍부하며, 신선도가 뛰어납니다.
            </div>
          </div>
        </div>
        <!-- 하단 주의사항 텍스트 -->
        <div class="mt-12 text-center">
          <p class="text-sm text-gray-500">
            * 위 이미지는 연출된 이미지로 실제 상품과 다소 차이가 있을 수
            있습니다.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* .ProductDetailDescription {
} */
</style>
