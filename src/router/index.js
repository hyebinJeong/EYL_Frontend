// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// import: 로그인/회원가입 관련
import HomeView from '@/views/GuestHome.vue';
import LoginView from '@/views/LoginView.vue';
import SignupTypeSelectView from '@/views/SignupTypeSelectView.vue';
import UserSignupView from '@/views/UserSignupView.vue';
import SellerSignupView from '@/views/SellerSignupView.vue';

// import: 상품/장바구니/주문 관련
import OrderForm from '@/views/OrderForm.vue';
import Cart from '@/views/Cart.vue';
import Home from '@/views/GuestHome.vue';
import ProductDetailPage from '@/views/ProductDetailPage.vue';

// 라우트 배열 정의
const routes = [
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

  // 상품 상세
  {
    path: '/products/:id',
    name: 'ProductDetail',
    component: ProductDetailPage,
  },

  // 장바구니 / 주문
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/orders/new', name: 'OrderForm', component: OrderForm },
];

// 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 라우터 가드 추가 (로그인 필요 페이지 보호용)
import { useAuthStore } from '@/stores/authStore';

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // 보호가 필요한 경로 목록 (로그인 필요)
  const authRequired = ['/orders/new', '/cart'];

  // 해당 경로로 접근하는데 로그인 상태가 아니면 로그인 페이지로 이동
  if (authRequired.includes(to.path) && !authStore.isLoggedIn) {
    alert('로그인이 필요합니다.');
    next('/login');
  } else {
    next();
  }
});

// 라우터 export
export default router;
