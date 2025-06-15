<template>
  <!-- 배경색, 그림자 제거, relative 유지 -->
  <div class="min-h-screen relative">
    <!-- 홈으로 버튼 (왼쪽 상단 고정) -->
    <RouterLink to="/">
      <h2 class="text-5xl font-bold mb-6 text-black absolute p-8">EYL</h2>
    </RouterLink>

    <!-- 회원가입 폼 중앙 정렬 -->
    <div class="flex items-center justify-center min-h-screen">
      <!-- 배경 하얀색, 패딩, 둥근 모서리만 적용 -->
      <div class="bg-white p-8 rounded-lg w-full max-w-md">
        <h2 class="text-2xl font-bold mb-6 text-center">일반회원 회원가입</h2>
        <form @submit.prevent="submitForm" class="space-y-4">
          <!-- 이름 -->
          <div>
            <label class="block text-sm font-medium">이름</label>
            <input
              v-model="name"
              type="text"
              class="w-full border border-gray-400 rounded-full px-4 py-2 outline-none"
            />
            <p v-if="!nameValid" class="text-red-500 text-sm">
              이름은 2자 이상이어야 합니다.
            </p>
          </div>

          <!-- 닉네임 (입력창과 중복검사 버튼 가로배치) -->
          <div>
            <label class="block text-sm font-medium">닉네임</label>
            <div class="flex space-x-2 mt-1">
              <input
                v-model="nickname"
                type="text"
                class="flex-grow border border-gray-400 rounded-full px-4 py-2 outline-none"
              />
              <button
                type="button"
                class="w-24 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold"
                @click="checkNicknameDuplicate"
              >
                중복검사
              </button>
            </div>
            <p v-if="!nicknameValid" class="text-red-500 text-sm">
              닉네임은 2자 이상이어야 합니다.
            </p>
          </div>

          <!-- 아이디 (입력창과 중복검사 버튼 가로배치) -->
          <div>
            <label class="block text-sm font-medium">아이디</label>
            <div class="flex space-x-2 mt-1">
              <input
                v-model="username"
                type="text"
                class="flex-grow border border-gray-400 rounded-full px-4 py-2 outline-none"
              />
              <button
                type="button"
                class="w-24 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold"
                @click="checkUsernameDuplicate"
              >
                중복검사
              </button>
            </div>
            <p v-if="!usernameValid" class="text-red-500 text-sm">
              아이디는 4자 이상이어야 합니다.
            </p>
          </div>

          <!-- 비밀번호 -->
          <div>
            <label class="block text-sm font-medium">비밀번호</label>
            <input
              v-model="password"
              type="password"
              class="w-full border border-gray-400 rounded-full px-4 py-2 outline-none"
            />
            <p v-if="!passwordValid" class="text-red-500 text-sm">
              비밀번호는 6자 이상이어야 합니다.
            </p>
          </div>

          <!-- 비밀번호 확인 -->
          <div>
            <label class="block text-sm font-medium">비밀번호 확인</label>
            <input
              v-model="passwordConfirm"
              type="password"
              class="w-full border border-gray-400 rounded-full px-4 py-2 outline-none"
            />
            <p
              v-if="passwordConfirm && !passwordsMatch"
              class="text-red-500 text-sm"
            >
              비밀번호가 일치하지 않습니다.
            </p>
          </div>

          <!-- 이메일 -->
          <div>
            <label class="block text-sm font-medium">이메일</label>
            <input
              v-model="email"
              type="email"
              class="w-full border border-gray-400 rounded-full px-4 py-2 outline-none"
            />
            <p v-if="!emailValid" class="text-red-500 text-sm">
              유효한 이메일 형식을 입력하세요.
            </p>
          </div>

          <!-- 전화번호 -->
          <div>
            <label class="block text-sm font-medium">전화번호</label>
            <input
              v-model="phone"
              type="tel"
              maxlength="11"
              @input="onPhoneInput"
              class="w-full border border-gray-400 rounded-full px-4 py-2 outline-none"
              placeholder="숫자만 입력하세요"
            />
            <p v-if="phone && !phoneValid" class="text-red-500 text-sm">
              숫자만 입력 가능합니다. 10~11자리여야 합니다.
            </p>
          </div>

          <!-- 회원가입 버튼 -->
          <div class="flex justify-center mt-6">
            <button
              type="submit"
              class="bg-green-700 hover:bg-green-800 text-white px-6 py-2 rounded-full font-semibold"
            >
              회원가입
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

// 입력값
const name = ref('')
const nickname = ref('')
const username = ref('')
const password = ref('')
const passwordConfirm = ref('')
const email = ref('')
const phone = ref('')

// 유효성 검사
const nameValid = computed(() => name.value.length >= 2)
const nicknameValid = computed(() => nickname.value.length >= 2)
const usernameValid = computed(() => username.value.length >= 4)
const passwordValid = computed(() => password.value.length >= 6)
const passwordsMatch = computed(() => password.value === passwordConfirm.value)
const emailValid = computed(() =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
)
const phoneValid = computed(() => /^\d{10,11}$/.test(phone.value))

// 전화번호 숫자만 입력 제한
const onPhoneInput = event => {
  phone.value = event.target.value.replace(/\D/g, '')
}

// 회원가입 제출 처리
const submitForm = () => {
  if (
    nameValid.value &&
    nicknameValid.value &&
    usernameValid.value &&
    passwordValid.value &&
    passwordsMatch.value &&
    emailValid.value &&
    phoneValid.value
  ) {
    alert('회원가입이 완료되었습니다!')
    router.push('/login')
  } else {
    alert('모든 입력란을 올바르게 작성해주세요.')
  }
}

// 닉네임 중복검사 예시 함수
const checkNicknameDuplicate = () => {
  if (!nicknameValid.value) {
    alert('닉네임을 올바르게 입력해주세요.')
    return
  }
  // TODO: 서버 API 호출 등 중복검사 로직 작성
  alert(`"${nickname.value}" 닉네임 중복검사 완료 (예시)`)
}

// 아이디 중복검사 예시 함수
const checkUsernameDuplicate = () => {
  if (!usernameValid.value) {
    alert('아이디를 올바르게 입력해주세요.')
    return
  }
  // TODO: 서버 API 호출 등 중복검사 로직 작성
  alert(`"${username.value}" 아이디 중복검사 완료 (예시)`)
}
</script>
