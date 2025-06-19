import OrderForm from '@/views/OrderForm.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Cart from '@/views/Cart.vue';
import Home from '@/views/Home.vue';
import ProductListPage from '@/views/ProductListPage.vue';
import ProductDetailPage from '@/views/ProductDetailPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // 홈
    { path: '/', name: 'Home', component: Home },
    // 로그인 / 회원가입
    // { path: '/login', name: 'Login', component: Login },
    // {
    //   path: '/signup/select',
    //   name: 'SignupTypeSelect',
    //   component: SignupTypeSelect,
    // },
    // { path: '/signup/user', name: 'UserSignup', component: UserSignup },
    // { path: '/signup/seller', name: 'SellerSignup', component: SellerSignup },
    // [카테고리 목록] 특정 카테고리별 상품만 보여주는 페이지
    // {
    //   path: '/products/category/:category',
    //   name: 'CategoryProductList',
    //   component: CategoryProductListPage,
    // },
    // [상세 페이지] 기본 설명 탭
    {
      path: '/products/:id',
      name: 'ProductDetail',
      component: ProductDetailPage,
    },
    // [카테고리 + 정렬] 상품 목록
    {
      path: '/product-list',
      name: 'ProductList',
      component: ProductListPage,
    },
    // [태그 전용] 상품 목록 (신상품, 베스트 등)
    {
      path: '/products/tag/:tagName',
      name: 'TaggedProductList',
      component: ProductListPage, // 같은 컴포넌트 재사용
    },
    // 장바구니 / 주문서
    // { path: '/cart', name: 'Cart', component: Cart },
    // { path: '/orders/new', name: 'OrderForm', component: OrderForm },

    // 마이페이지
    // { path: '/mypage', name: 'MyPageHome', component: MyPageHome },
    // { path: '/mypage/reviews', name: 'MyReviewList', component: MyReviewList },
    // {
    //   path: '/mypage/reviews/new/:productId',
    //   name: 'ReviewWrite',
    //   component: ReviewWrite,
    // },
    // {
    //   path: '/mypage/reviews/:reviewId/edit',
    //   name: 'ReviewEdit',
    //   component: ReviewEdit,
    // },
    // { path: '/mypage/orders', name: 'MyOrderList', component: MyOrderList },
    // { path: '/mypage/info', name: 'MyInfo', component: MyInfo },
  ],
});

export default router;
