import api from '.';

/**
 * 상품 리뷰 목록 조회
 * @param {number} productId
 * @param {number} page
 * @param {number} size
 */
export const getReviewsByProduct = (productId, page = 1, size = 10) => {
  return api.get(`/products/${productId}/reviews`, {
    params: { page, size },
  });
};
