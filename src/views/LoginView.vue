<!-- src/views/LoginView.vue -->
<!-- 로그인 전체 화면을 구성하는 뷰 컴포넌트 -->
<template>
  <div class="min-h-screen flex justify-center items-center">
    <!-- LoginForm.vue를 포함 -->
    <LoginForm />
  </div>
</template>

<script setup>
// LoginForm 컴포넌트를 import
import LoginForm from '@/components/auth/LoginForm.vue';
</script>
