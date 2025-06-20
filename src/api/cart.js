import api from '.';

// 장바구니 담기
// export const addToCart = ({ productId, quantity }) =>
//   api.post(
//     '/cart',
//     {
//       product_id: productId,
//       quantity,
//     },
//     { withCredentials: true },
//   );
// 임시 테스트 코드
export const addToCart = async ({ productId, quantity }) => {
  console.log('장바구니 담기 요청:', { productId, quantity });
  // 여기서는 실제 저장 안함
  return { data: { success: true } };
};

// 장바구니 목록 조회
// export const getCartItems = () => api.get('/cart', { withCredentials: true });
// 임시 테스트 코드
export const getCartItems = async () => {
  return { data: mockCart };
};
