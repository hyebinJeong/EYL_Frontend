// cart.js에서 addToCart 가져와서 장바구니로 이동하는 코드 재사용하기 위한 파일
import { useRouter } from 'vue-router';
import { addToCart } from '@/api/cart';

export function useAddToCart() {
  const router = useRouter();

  const addProductToCart = async ({ user_id, product_id, quantity }) => {
    try {
      await addToCart({ user_id, product_id, quantity });
      router.push('/cart');
    } catch (error) {
      console.error('장바구니 담기 실패:', error);
      alert('장바구니 담기에 실패했습니다.');
    }
  };

  return { addProductToCart };
}
