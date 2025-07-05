import api from '.';

// 실제 연동용 Axios 예시 (AWS S3 연동 시 사용 예정)
export const getProductDescription = id => {
  return api.get(`/products/${id}/description`);
};

// 고정 path 기반 API - 의미 있는 상품 섹션은 path로 구분하는 것이 실무적으로 명확
// 베스트 상품 조회(최근 한달 기준 판매량 내림차순으로 백엔드에서 정렬)
export const getBestProducts = () => api.get('/products/best');

// 신상품 조회(출시일 기준 내림차순 정렬된 데이터)
export const getNewProducts = () => api.get('/products/new');

// 이달의 과일 조회(백엔드에서 날짜 필터링 처리)
export const getMonthlyProducts = () => api.get('/products/monthly');

// 동적 파라미터 기반 API - 카테고리별 상품을 query string으로 조회
export const getProductsByCategory = (category, sort) => {
  return api.get('/products', {
    params: {
      category,
      ...(sort && { sort }),
    },
  });
};
// 상품 상세 정보 조회 API
export const getProductDetail = id => api.get(`/products/${id}`);

// 이미지 기반 상세 설명만 사용할거라 아래 코드는 필요 없지만, 추후 변경을 고려하여 그대로 둠
// // 상세 설명 API 함수
// export const getProductDescription = async id => {
//   const description = descriptionMockMap[id];
//   return { data: description };

//   // 실제 백엔드 연동 시 아래처럼 대체
//   // return api.get(`/products/${id}/description`);
// };
