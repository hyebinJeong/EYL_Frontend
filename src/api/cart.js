import api from '.';

// 장바구니 상품 담기
export const addToCart = async ({ productId, quantity }) => {
  return api.post('/cart', {
    productId,
    quantity,
  });
};

// 장바구니 목록 조회
export const getCartItems = async () => {
  return api.get('/cart');
};

// 장바구니 항목 선택 삭제
export const deleteCartItems = async ({ productIds }) => {
  return api.delete('/cart/batch', {
    data: {
      productIds,
    },
  });
};

// 장바구니 수량 변경 (+, -, 직접 변경)
export const updateCartItemQuantity = async ({ productId, quantity }) => {
  return api.patch('/cart', {
    productId,
    quantity,
  });
};
