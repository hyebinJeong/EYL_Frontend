// vue-router에서 라우터 생성 함수와 히스토리 모드 함수 import
import { createRouter, createWebHistory } from 'vue-router'

// import: 로그인/회원가입 관련
import HomeView from '@/views/HomeView.vue' // 메인 홈 화면
import LoginView from '@/views/LoginView.vue' // 로그인 화면
import SignupTypeSelectView from '@/views/SignupTypeSelectView.vue' // 회원가입 유형 선택 화면
import UserSignupView from '@/views/UserSignupView.vue' // 일반 회원가입 폼 화면
import SellerSignupView from '@/views/SellerSignupView.vue' // 판매자 회원가입 폼 화면

// import: 상품/장바구니/주문 관련
import OrderForm from '@/views/OrderForm.vue';
import Cart from '@/views/Cart.vue';
import Home from '@/views/Home.vue';
// import ProductListPage from '@/views/ProductListPage.vue';
import ProductDetailPage from '@/views/ProductDetailPage.vue';

// 라우트 배열 정의
const routes = [
  // 홈
  { path: '/', name: 'Home', component: Home },

  // 로그인 / 회원가입
  { path: '/login', name: 'login', component: LoginView },
  { path: '/signup', name: 'signup-select', component: SignupTypeSelectView },
  { path: '/signup/user', name: 'signup-user', component: UserSignupView },
  { path: '/signup/seller', name: 'signup-seller', component: SellerSignupView },

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

  // [상품 목록 페이지] (category, sort, tag 필터 포함)
  // {
  //   path: '/product-list',
  //   name: 'ProductList',
  //   component: ProductListPage,
  // },

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
]

// 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 라우터 export
export default router
