<template>
  <div
    class="min-h-screen relative bg-gray-50 flex flex-col items-center justify-center px-6 py-12"
  >
    <!-- 좌상단 로고 -->
    <RouterLink to="/">
      <h2
        class="text-5xl font-bold text-black absolute top-8 left-8 select-none"
      >
        EYL
      </h2>
    </RouterLink>

    <!-- 회원가입 폼 또는 준비중 메시지 박스 -->
    <section
      class="bg-white p-8 rounded-lg w-full max-w-md shadow-md z-10 text-center"
    >
      <!-- 폼이 보여질 때 -->
      <template v-if="showForm">
        <h2 class="text-2xl font-bold mb-6">사업자 회원가입</h2>

        <!-- 실제 작동하지 않는 비활성화된 폼 -->
        <div class="space-y-4 text-left opacity-50 pointer-events-none">
          <input
            type="text"
            class="w-full border rounded-full px-4 py-2"
            placeholder="이름"
          />
          <input
            type="text"
            class="w-full border rounded-full px-4 py-2"
            placeholder="닉네임"
          />
          <input
            type="text"
            class="w-full border rounded-full px-4 py-2"
            placeholder="아이디"
          />
          <input
            type="password"
            class="w-full border rounded-full px-4 py-2"
            placeholder="비밀번호"
          />
          <input
            type="password"
            class="w-full border rounded-full px-4 py-2"
            placeholder="비밀번호 확인"
          />
          <input
            type="email"
            class="w-full border rounded-full px-4 py-2"
            placeholder="이메일"
          />
          <input
            type="tel"
            class="w-full border rounded-full px-4 py-2"
            placeholder="전화번호"
          />

          <!-- 버튼도 비활성화 상태로 표시 -->
          <button
            class="w-full bg-gray-400 text-white py-2 rounded-full"
            disabled
          >
            회원가입
          </button>
        </div>
      </template>

      <!-- 준비중 메시지가 보여질 때 -->
      <template v-else>
        <h2 class="text-2xl font-bold mb-6">사업자 회원가입</h2>
        <p class="text-gray-600 text-base">
          사업자 회원가입은 현재 준비 중입니다. <br />
          빠른 시일 내에 제공될 예정입니다.
        </p>

        <!-- 클릭해도 기능은 없지만 alert 띄움 -->
        <button
          class="mt-6 bg-gray-400 text-white px-6 py-2 rounded-full font-semibold cursor-not-allowed"
          @click="showAlert"
        >
          회원가입 비활성화됨
        </button>
      </template>
    </section>
  </div>
</template>

<script setup>
// Vue의 ref와 onMounted 가져오기
import { ref, onMounted } from 'vue'

// showForm이 true면 폼이 보이고, false면 준비중 메시지가 보임
const showForm = ref(true)

// 컴포넌트가 화면에 보이면(setup 완료되면)
onMounted(() => {
  // 1초 후에 showForm 값을 false로 바꿔서 준비중 메시지로 전환
  setTimeout(() => {
    showForm.value = false
  }, 1000)
})

// 버튼 클릭 시 알림창 띄우는 함수
function showAlert() {
  alert('사업자 회원가입 기능은 현재 준비 중입니다.')
}
</script>
