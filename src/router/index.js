import { createRouter, createWebHistory } from 'vue-router'
import Cart from '@/views/Cart.vue'
import Home from '@/views/Home.vue'

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

    // 상품 목록 (기본, 카테고리, 필터/정렬 모두 이 컴포넌트 하나로 처리)
    // {
    //   path: '/products',
    //   name: 'ProductList',
    //   component: ProductList,
    // },
    // {
    //   path: '/products/category/:category',
    //   name: 'ProductCategory',
    //   component: ProductList,
    // },
    // 상품 상세 페이지 - 기본(설명)
    // {
    //   path: '/products/:id',
    //   name: 'ProductDetail',
    //   component: ProductDetail,
    // },
    // 상품 상세 페이지 - 리뷰 탭
    // {
    //   path: '/products/:id/reviews',
    //   name: 'ProductReviews',
    //   component: ProductReviews,
    // },
    // 장바구니 / 주문서
    { path: '/cart', name: 'Cart', component: Cart },
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
})

export default router
