// vue-router에서 라우터 생성 함수와 히스토리 모드 함수 import
import { createRouter, createWebHistory } from 'vue-router';

// import: 로그인/회원가입 관련
import HomeView from '@/views/HomeView.vue'; // 메인 홈 화면
import LoginView from '@/views/LoginView.vue'; // 로그인 화면
import SignupTypeSelectView from '@/views/SignupTypeSelectView.vue'; // 회원가입 유형 선택 화면
import UserSignupView from '@/views/UserSignupView.vue'; // 일반 회원가입 폼 화면
import SellerSignupView from '@/views/SellerSignupView.vue'; // 판매자 회원가입 폼 화면

// import: 상품/장바구니/주문 관련
import OrderForm from '@/views/OrderForm.vue';
import Cart from '@/views/Cart.vue';
import Home from '@/views/HomeView.vue'; // 임시로 변경 Home -> HomeView
//import ProductListPage from '@/views/ProductListPage.vue';
import ProductDetailPage from '@/views/ProductDetailPage.vue';

// 라우트 배열 정의
const routes = [
  // 홈
  { path: '/', name: 'Home', component: Home },

  // 로그인 / 회원가입
  { path: '/login', name: 'login', component: LoginView },
  { path: '/signup', name: 'signup-select', component: SignupTypeSelectView },
  { path: '/signup/user', name: 'signup-user', component: UserSignupView },
  {
    path: '/signup/seller',
    name: 'signup-seller',
    component: SellerSignupView,
  },

  // 장바구니 / 주문서
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/orders/new', name: 'OrderForm', component: OrderForm },

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

  // [상품 상세 페이지]
  // 특정 상품의 상세 정보를 조회
  // {
  //   path: '/products/detail/:id',
  //   name: 'ProductDetail',
  //   component: ProductDetailPage,
  // },
  // [베스트 상품 목록 페이지]
  // 최근 1개월 판매량 기준으로 인기 상품을 보여줌
  // {
  //   path: '/products/best',
  //   name: 'BestProducts',
  //   component: ProductListPage,
  // },
  // [신상품 목록 페이지]
  // 출시일 기준으로 최신순으로 정렬된 신상품 리스트
  // {
  //   path: '/products/new',
  //   name: 'NewProducts',
  //   component: ProductListPage,
  // },
  // [이달의 과일 페이지]
  // 현재 달에 출시된 상품만 필터링하여 보여줌
  // {
  //   path: '/products/monthly',
  //   name: 'MonthlyProducts',
  //   component: ProductListPage,
  // },
  // [카테고리별 상품 목록 페이지]
  // 카테고리 + 정렬 쿼리 조합을 기반으로 상품 리스트를 보여줌
  // {
  //   path: '/products/category/:category',
  //   name: 'CategoryProductList',
  //   component: ProductListPage,
  //   props: route => ({
  //     category: route.params.category,
  //     sort: route.query.sort || null,
  //   }),
  // },
];

// 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 라우터 export
export default router;
