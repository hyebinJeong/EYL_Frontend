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
    // [상품 상세 페이지]
    // 특정 상품의 상세 정보를 조회
    {
      path: '/products/detail/:id',
      name: 'ProductDetail',
      component: ProductDetailPage,
    },
    // [베스트 상품 목록 페이지]
    // 최근 1개월 판매량 기준으로 인기 상품을 보여줌
    {
      path: '/products/best',
      name: 'BestProducts',
      component: ProductListPage,
    },
    // [신상품 목록 페이지]
    // 출시일 기준으로 최신순으로 정렬된 신상품 리스트
    {
      path: '/products/new',
      name: 'NewProducts',
      component: ProductListPage,
    },
    // [이달의 과일 페이지]
    // 현재 달에 출시된 상품만 필터링하여 보여줌
    {
      path: '/products/monthly',
      name: 'MonthlyProducts',
      component: ProductListPage,
    },
    // [카테고리별 상품 목록 페이지]
    // 카테고리 + 정렬 쿼리 조합을 기반으로 상품 리스트를 보여줌
    {
      path: '/products/category/:category',
      name: 'CategoryProductList',
      component: ProductListPage,
      props: route => ({
        category: route.params.category,
        sort: route.query.sort || null,
      }),
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
