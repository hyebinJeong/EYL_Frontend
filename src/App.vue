<script setup>
import Header from '@/components/Header.vue'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
userStore.fetchUser()  // 앱 시작 시 로그인 상태 확인
</script>

<template>
  <div class="App">
    <Header />
    <router-view />
  </div>
</template>
