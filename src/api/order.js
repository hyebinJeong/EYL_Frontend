import api from '.'; //경로를 정확하게 지정해줘야 추후 협업 때 가독성 향상
//'.'으로만 쓰면 api에서 문제 시 찾기 힘들다고 함.

// 주문 전에 재고 확인 (장바구니 -> 주문 페이지로 이동하기 전)
export const checkStock = ({ orderItems }) => {
  return api.post('/orders/checkStock', {
    orderItems,
  });
};

// 로그인한 사용자 정보 가져오기 (GET /api/users/me)
export const getMyInfo = () => {
  return api.get('/users/me');
};

// 주문 생성 (POST /api/orders)
export const createOrder = orderData => {
  return api.post('/orders', orderData);
};

// 배송지 저장/수정 (POST /api/orders/:order_id/delivery)
export const saveOrderDelivery = (orderId, deliveryInfo) => {
  // deliveryInfo = { name, phone, address }
  return api.post(`/orders/${orderId}/delivery`, deliveryInfo);
};
