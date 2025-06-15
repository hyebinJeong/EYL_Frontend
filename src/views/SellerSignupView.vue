<template>
  <div
    class="min-h-screen relative bg-gray-50 flex flex-col items-center justify-center px-6 py-12"
  >
    <!-- EYL 로고 (왼쪽 상단 고정) -->
    <RouterLink to="/">
      <h2
        class="text-5xl font-bold text-black absolute top-8 left-8 select-none"
      >
        EYL
      </h2>
    </RouterLink>

    <!-- 회원가입 입력폼 (가운데 정렬) -->
    <section class="bg-white p-8 rounded-lg w-full max-w-md shadow-md z-10">
      <h2 class="text-2xl font-bold mb-6 text-center">사업자 회원가입</h2>
      <form @submit.prevent="submitForm" class="space-y-4">
        <!-- 이름 -->
        <div>
          <label class="block text-sm font-medium">이름</label>
          <input
            v-model="name"
            type="text"
            class="w-full border border-gray-400 rounded-full px-4 py-2 outline-none"
          />
          <p v-if="!nameValid" class="text-red-500 text-sm mt-1">
            이름은 2자 이상이어야 합니다.
          </p>
        </div>

        <!-- 닉네임 + 중복검사 -->
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
          <p v-if="!nicknameValid" class="text-red-500 text-sm mt-1">
            닉네임은 2자 이상이어야 합니다.
          </p>
        </div>

        <!-- 아이디 + 중복검사 -->
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
          <p v-if="!usernameValid" class="text-red-500 text-sm mt-1">
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
          <p v-if="!passwordValid" class="text-red-500 text-sm mt-1">
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
            class="text-red-500 text-sm mt-1"
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
          <p v-if="!emailValid" class="text-red-500 text-sm mt-1">
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
          <p v-if="phone && !phoneValid" class="text-red-500 text-sm mt-1">
            숫자만 입력 가능하며 10~11자리여야 합니다.
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
    </section>

    <!-- 약관 체크박스 영역 (입력폼 하단, 분리) -->
    <section
      class="mt-12 w-full max-w-md bg-white p-6 rounded-lg border border-gray-300 shadow-sm"
    >
      <h3 class="text-lg font-semibold mb-4">사업자 약관 동의</h3>
      <div class="flex flex-col space-y-3 max-h-72 overflow-y-auto pr-2">
        <label class="flex items-start space-x-2">
          <input type="checkbox" v-model="terms.agree1" class="mt-1" />
          <span class="text-sm leading-relaxed">
            [필수] 서비스 이용약관에 동의합니다.
          </span>
        </label>
        <label class="flex items-start space-x-2">
          <input type="checkbox" v-model="terms.agree2" class="mt-1" />
          <span class="text-sm leading-relaxed">
            [필수] 개인정보 수집 및 이용에 동의합니다.
          </span>
        </label>
        <label class="flex items-start space-x-2">
          <input type="checkbox" v-model="terms.agree3" class="mt-1" />
          <span class="text-sm leading-relaxed">
            [필수] 전자금융거래 이용약관에 동의합니다.
          </span>
        </label>
        <!-- 선택 약관 -->
        <label class="flex items-start space-x-2">
          <input type="checkbox" v-model="terms.agree4" class="mt-1" />
          <span class="text-sm leading-relaxed">
            [선택] 마케팅 정보 수신에 동의합니다.
          </span>
        </label>
      </div>

      <!-- 모두 동의 체크박스 -->
      <label
        class="flex items-center space-x-2 mt-6 font-semibold cursor-pointer select-none"
      >
        <input
          type="checkbox"
          :checked="allAgreed"
          @change="toggleAllAgreements"
          class="w-5 h-5"
        />
        <span>모두 동의합니다.</span>
      </label>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const name = ref('')
const nickname = ref('')
const username = ref('')
const password = ref('')
const passwordConfirm = ref('')
const email = ref('')
const phone = ref('')

// 약관 동의 상태
const terms = ref({
  agree1: false,
  agree2: false,
  agree3: false,
  agree4: false, // 선택
})

const nameValid = computed(() => name.value.length >= 2)
const nicknameValid = computed(() => nickname.value.length >= 2)
const usernameValid = computed(() => username.value.length >= 4)
const passwordValid = computed(() => password.value.length >= 6)
const passwordsMatch = computed(() => password.value === passwordConfirm.value)
const emailValid = computed(() =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value),
)
const phoneValid = computed(() => /^[0-9]{10,11}$/.test(phone.value))

const allAgreed = computed(
  () => terms.value.agree1 && terms.value.agree2 && terms.value.agree3,
)

function toggleAllAgreements(e) {
  const checked = e.target.checked
  terms.value.agree1 = checked
  terms.value.agree2 = checked
  terms.value.agree3 = checked
  terms.value.agree4 = checked
}

function onPhoneInput(e) {
  e.target.value = e.target.value.replace(/[^0-9]/g, '')
  phone.value = e.target.value
}

function submitForm() {
  // 필수 약관 미동의시 차단
  if (!terms.value.agree1 || !terms.value.agree2 || !terms.value.agree3) {
    alert('필수 약관에 모두 동의해 주세요.')
    return
  }

  if (
    !nameValid.value ||
    !nicknameValid.value ||
    !usernameValid.value ||
    !passwordValid.value ||
    !passwordsMatch.value ||
    !emailValid.value ||
    !phoneValid.value
  ) {
    alert('입력 폼을 올바르게 작성해 주세요.')
    return
  }

  // 회원가입 처리 로직 (예: API 요청)
  alert('회원가입 성공!')
}

// 중복검사 버튼 더미 함수
function checkNicknameDuplicate() {
  alert('닉네임 중복검사 실행')
}
function checkUsernameDuplicate() {
  alert('아이디 중복검사 실행')
}
</script>

<style scoped>
/* 필요시 추가 스타일 */
</style>
