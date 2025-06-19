import api from '.';

// 신상품, 이달의 과일, 태그 상품 조회
export const getProductsByTag = tag =>
  api.get('/products', { params: { tag } });

//  베스트 상품 조회
export const getBestProducts = () => api.get('/products/best');

// 카테고리별 상품 조회 (정렬 포함)
// export const getProductsByCategory = (category, sort) =>
//   api.get('/products', {
//     params: {
//       category,
//       ...(sort && { sort }), // sort가 있을 때만 추가
//     },
//   });

// 임시 mock 데이터로 테스트
// product.js
export const getProductsByCategory = async (category, sort) => {
  const data = [
    { id: 1, name: '레드애플', price: 5000, imageUrl: '...' },
    { id: 2, name: '청포도', price: 4500, imageUrl: '...' },
    { id: 3, name: '청사과', price: 8000, imageUrl: '...' },
    { id: 4, name: '메론', price: 7000, imageUrl: '...' },
    { id: 5, name: '레몬', price: 6000, imageUrl: '...' },
    { id: 6, name: '사파이어포도', price: 9000, imageUrl: '...' },
  ];

  if (sort === 'price_asc') data.sort((a, b) => a.price - b.price);
  if (sort === 'price_desc') data.sort((a, b) => b.price - a.price);

  return { data };
};

// 상품 상세 정보 조회
export const getProductDetail = id => api.get(`/products/${id}`);
