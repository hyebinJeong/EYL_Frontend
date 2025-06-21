import api from '.';

// 주문 전에 재고 확인 (장바구니 -> 주문 페이지로 이동하기 전)
export const checkStock = ({ order_items }) => {
  return api.post('/orders/check-stock', {
    order_items,
  });
};
