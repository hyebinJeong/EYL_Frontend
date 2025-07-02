<script setup>
import Header from '@/components/Header.vue';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stores/authStore'; //store 

const authStore = useAuthStore();

onMounted(() => {
  authStore.fetchUser(); // 앱 시작 시 세션 로그인 확인
});
</script>

<template>
  <div class="App">
    <Header />
    <router-view />
  </div>
</template>
