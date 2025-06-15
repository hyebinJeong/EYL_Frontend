// vue-router에서 라우터 생성 함수와 히스토리 모드 함수 import
import { createRouter, createWebHistory } from 'vue-router'

// 각 View 컴포넌트 import (페이지 역할)
import HomeView from '../views/HomeView.vue' // 메인 홈 화면
import LoginView from '../views/LoginView.vue' // 로그인 화면
import SignupTypeSelectView from '../views/SignupTypeSelectView.vue' // 회원가입 유형 선택 화면
import UserSignupView from '../views/UserSignupView.vue' // 일반 회원가입 폼 화면
import SellerSignupView from '../views/SellerSignupView.vue' // 판매자 회원가입 폼 화면

// 경로(path)와 연결될 컴포넌트를 정의하는 라우트 배열
const routes = [
  {
    path: '/', // 기본 URL → 홈 페이지
    name: 'home', // 라우트 이름 (사용자 정의)
    component: HomeView, // 연결할 컴포넌트
  },
  {
    path: '/login', // "/login" URL → 로그인 페이지
    name: 'login', // 라우트 이름
    component: LoginView, // 로그인 컴포넌트 연결
  },
  {
    path: '/signup', // "/signup" URL → 회원 유형 선택 페이지
    name: 'signup-select', // 라우트 이름
    component: SignupTypeSelectView, // 회원가입 선택 컴포넌트
  },
  {
    path: '/signup/user', // "/signup/user" URL → 일반회원 가입 폼
    name: 'signup-user', // 라우트 이름
    component: UserSignupView, // 일반 회원가입 컴포넌트
  },
  {
    path: '/signup/seller', // "/signup/seller" URL → 판매자 회원가입 폼
    name: 'signup-seller', // 라우트 이름
    component: SellerSignupView, // 판매자 회원가입 컴포넌트
  },
]

// 라우터 인스턴스 생성
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // 브라우저 히스토리 모드 설정 (URL 깔끔하게)
  routes, // 위에서 정의한 라우트 배열 등록
})

// 라우터 인스턴스 export → main.js에서 app.use(router)로 사용
export default router
